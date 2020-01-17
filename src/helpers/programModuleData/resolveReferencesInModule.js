// @flow

import { flatten } from 'lodash';

import { type ProgramModuleData, type ProgramModuleDataAction } from '.';

type FetchProgramModuleData = (id: string) => Promise<ProgramModuleData>;

async function resolveReferencesInAction(
  action: ProgramModuleDataAction,
  seenIds: $ReadOnlyArray<string>,
  fetchProgramModuleData: FetchProgramModuleData,
) {
  switch (action.type) {
    case 'reference': {
      // $FlowFixMe
      const referencedModule = await fetchProgramModuleData(action.actionModuleId);

      if (!referencedModule) {
        throw new Error('Referenced module not found');
      }

      if (seenIds.includes(referencedModule.id)) {
        throw new Error('Referenced module is cycling');
      }

      return resolveReferencesInAction(
        // $FlowFixMe
        referencedModule.data.action,
        [...seenIds, referencedModule.id],
        fetchProgramModuleData,
      );
    }
    case 'blocks': {
      return action;
    }
    case 'multiStep': {
      // $FlowFixMe
      const steps = flatten(
        await Promise.all(
          action.steps.map(async (step) => {
            const resolvedAction =
              step.action &&
              (await resolveReferencesInAction(step.action, seenIds, fetchProgramModuleData));

            if (resolvedAction && resolvedAction.type === 'multiStep') {
              return resolvedAction.steps;
            }

            return [
              {
                ...step,
                action: resolvedAction,
              },
            ];
          }),
        ),
      );

      return {
        ...action,
        steps,
      };
    }
    default: {
      throw new Error(`Invalid action type "${action.type}"`);
    }
  }
}

export default async function resolveReferencesInModule(
  programModuleData: ProgramModuleData,
  fetchProgramModuleData: FetchProgramModuleData,
) {
  switch (programModuleData.type) {
    case 'generic': {
      const resolvedAction =
        programModuleData.data.action &&
        (await resolveReferencesInAction(
          programModuleData.data.action,
          [programModuleData.id],
          fetchProgramModuleData,
        ));

      if (programModuleData.data.action === resolvedAction) {
        return programModuleData;
      }

      return { ...programModuleData, data: { ...programModuleData.data, action: resolvedAction } };
    }
    default: {
      throw new Error(`Invalid programModuleData type "${programModuleData.type}"`);
    }
  }
}
