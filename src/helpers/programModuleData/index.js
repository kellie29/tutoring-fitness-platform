// @flow

import { DateTime, Duration } from 'luxon';

import {
  type TypedObject,
  type AbstractTypedObject,
  createTypedObjectFactory,
} from '../typedObject';

import {
  type GenericProgramModuleData,
  type GenericProgramModuleDataScheduling,
} from './types/generic';

export * from './types/generic';
export * from './actions';
export { default as resolveReferencesInModule } from './resolveReferencesInModule';

export type ProgramModuleDataBaseData = $ReadOnly<{|
  // TODO: Remove these
  id: string,
  name: string,
|}>;

export type ProgramModuleDataTypes = {|
  generic: GenericProgramModuleData,
|};
export const programModuleDataFactory = createTypedObjectFactory<ProgramModuleDataTypes>();

export type ProgramModuleData = $Values<ProgramModuleDataTypes>;
export type ScheduledProgramModuleData = GenericProgramModuleData;
export type AbstractProgramModuleData = AbstractTypedObject<ProgramModuleDataTypes>;
export type ProgramModuleDataType = $Keys<ProgramModuleDataTypes>;
export const programModuleDataTypes: Array<ProgramModuleDataType> = ['generic'];

export type ProgramModuleDataObject<
  TProgramModuleDataType: ProgramModuleDataType,
  TProgramModuleData,
> = TypedObject<TProgramModuleDataType, TProgramModuleData, ProgramModuleDataBaseData>;

export type ProgramModuleDataEvent = $ReadOnly<{|
  id: string,
  title: string,
  start: DateTime,
  end: DateTime,
  programModuleData: ScheduledProgramModuleData,
|}>;

type ProgramModuleDataToEventsOptions = {|
  startDate: DateTime,
  endDate: DateTime,
|};

type Scheduling = $ReadOnly<{
  ...GenericProgramModuleDataScheduling,
}>;
const createEventsFromScheduling = (
  options: ProgramModuleDataToEventsOptions,
  programModuleData: ScheduledProgramModuleData,
  scheduling: Scheduling,
): $ReadOnlyArray<ProgramModuleDataEvent> => {
  const { startDate, endDate } = options;
  const { name } = programModuleData;

  const reminderStartDate = startDate
    .startOf('day')
    .plus({ days: scheduling.startDay - 1 })
    .plus({ milliseconds: scheduling.startTime });
  const duration = Duration.fromMillis(0);

  const events = [];
  let occurenceStartDate = reminderStartDate;
  // $FlowFixMe
  while (occurenceStartDate < endDate) {
    events.push({
      id: `${programModuleData.id}-${events.length}`,
      title: name,
      start: occurenceStartDate,
      end: occurenceStartDate.plus(duration),
      programModuleData,
    });

    if (scheduling.recurrenceFrequency === 'never') {
      break;
    }

    switch (scheduling.recurrenceFrequency) {
      case 'daily': {
        occurenceStartDate = occurenceStartDate.plus({ days: scheduling.recurrenceInterval });
        break;
      }
      case 'weekly': {
        occurenceStartDate = occurenceStartDate.plus({ weeks: scheduling.recurrenceInterval });
        break;
      }
      case 'monthly': {
        occurenceStartDate = occurenceStartDate.plus({ months: scheduling.recurrenceInterval });
        break;
      }
      case 'yearly': {
        occurenceStartDate = occurenceStartDate.plus({ years: scheduling.recurrenceInterval });
        break;
      }
      default: {
        throw new Error(`Unknown recurrenceFrequency "${scheduling.recurrenceFrequency}"`);
      }
    }

    if (scheduling.recurrenceEnd === 'onDay') {
      const recurrenceEndDate = startDate.plus({ days: scheduling.recurrenceEndOnDay });
      // $FlowFixMe
      if (occurenceStartDate > recurrenceEndDate) {
        break;
      }
    } else if (scheduling.recurrenceEnd === 'afterAmount') {
      if (events.length > scheduling.recurrenceEndAfterAmount) {
        break;
      }
    }
  }

  return events;
};

export function programModuleDataToEvents(
  options: ProgramModuleDataToEventsOptions,
  programModuleData: ProgramModuleData,
): $ReadOnlyArray<ProgramModuleDataEvent> {
  switch (programModuleData.type) {
    case 'generic': {
      if (!programModuleData.data.scheduling) {
        return [];
      }

      return createEventsFromScheduling(
        options,
        programModuleData,
        programModuleData.data.scheduling,
      );
    }
    default: {
      throw new Error(`Invalid programModuleData type "${programModuleData.type}"`);
    }
  }
}
