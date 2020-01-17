// @flow

import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import invariant from 'invariant';

import {
  type ProgramModuleDataAction,
  type ProgramModuleDataActionType,
  programModuleDataActionTypes,
  type ProgramModuleDataActionTypes,
} from '../../helpers/programModuleData';

import { type DataEditorProps } from '.';
import BlocksActionEditor from './BlocksActionEditor';
import ReferenceActionEditor from './ReferenceActionEditor';
import MultiStepActionEditor from './MultiStepActionEditor';

const actionModuleActionTypeToString: $ObjMap<ProgramModuleDataActionTypes, () => string> = {
  blocks: 'Blocks',
  reference: 'Reference',
  multiStep: 'Multi-Step',
};

type Props = {|
  ...DataEditorProps<ProgramModuleDataAction>,
  types?: $ReadOnlyArray<ProgramModuleDataActionType>,
|};

export default function ActionModuleEditor(props: Props) {
  const { types = programModuleDataActionTypes, data: action, onChange, parentData } = props;

  // // Do not allow nested multiStep actions
  // const noMultiStep = parentData.find(
  //   ([type, blehdata]) => type === 'action' && blehdata.action.type === 'multiStep',
  // );
  // // Do not allow references directly under action modules
  // const noReference = !parentData[1];
  const noMultiStep = false;
  const noReference = false;

  // Filter unavailable types
  const availableActionTypes = types.filter(
    (t) => (!noMultiStep || t !== 'multiStep') && (!noReference || t !== 'reference'),
  );

  if (action && !availableActionTypes.includes(action.type)) {
    availableActionTypes.push(action.type);
  }

  const onTypeChange = React.useCallback(
    (nextType) => {
      invariant(action, 'Expected "action"');

      switch (nextType) {
        case 'blocks': {
          onChange({ type: 'blocks', blocks: [] });
          break;
        }
        case 'reference': {
          onChange({ type: 'reference', actionModuleId: null });
          break;
        }
        case 'multiStep': {
          onChange({ type: 'multiStep', steps: [] });
          break;
        }
        default: {
          throw new Error(`Invalid action type "${nextType}"`);
        }
      }
    },
    [action, onChange],
  );

  if (!action) {
    onChange({ type: 'blocks', blocks: [] });
    return null;
  }

  return (
    <>
      {availableActionTypes.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 16 }}>
          <FormControl style={{ marginRight: 8 }}>
            <InputLabel htmlFor="action-type">Action Type</InputLabel>
            <NativeSelect
              value={action.type}
              onChange={(event) => onTypeChange(event.target.value)}
              inputProps={{
                name: 'action-type',
                id: 'action-type',
              }}
            >
              {availableActionTypes
                .filter((actionType) => actionType !== 'read' || action.type === 'read')
                .map((actionType) => (
                  <option key={actionType} value={actionType}>
                    {actionModuleActionTypeToString[actionType]}
                  </option>
                ))}
            </NativeSelect>
          </FormControl>
        </div>
      )}
      <div>
        {(() => {
          switch (action.type) {
            case 'blocks': {
              return (
                <BlocksActionEditor
                  data={action}
                  onChange={onChange}
                  parentData={[...parentData, ['action', action]]}
                />
              );
            }
            case 'reference': {
              return (
                <ReferenceActionEditor
                  data={action}
                  onChange={onChange}
                  parentData={[...parentData, ['action', action]]}
                />
              );
            }
            case 'multiStep': {
              return (
                <MultiStepActionEditor
                  data={action}
                  onChange={onChange}
                  parentData={[...parentData, ['action', action]]}
                />
              );
            }
            default: {
              throw new Error(`Invalid action type "${action.type}"`);
            }
          }
        })()}
      </div>
    </>
  );
}
