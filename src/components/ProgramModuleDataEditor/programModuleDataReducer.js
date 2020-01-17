// @flow

import {
  type ProgramModuleData,
  type ProgramModuleDataTypes,
} from '../../helpers/programModuleData';

type Action =
  | { type: 'change', payload: ProgramModuleData }
  | { type: 'changeType', payload: $PropertyType<ProgramModuleData, 'type'> }
  | {
      type: 'changeDataForType',
      payload: $Values<
        $ObjMapi<
          ProgramModuleDataTypes,
          <TType, TModule>(TType, TModule) => { type: TType, data: $PropertyType<TModule, 'data'> },
        >,
      >,
    };

export default function programModuleDataReducer(
  programModuleData: ProgramModuleData,
  action: Action,
): ProgramModuleData {
  switch (action.type) {
    case 'change': {
      return action.payload;
    }
    case 'changeType': {
      return {
        ...programModuleData,
        type: action.payload,
      };
    }
    case 'changeDataForType': {
      const { data } = action.payload;

      return {
        ...programModuleData,
        data,
      };
    }
    default: {
      throw new Error(`Unknown action type ${action.type}`);
    }
  }
}
