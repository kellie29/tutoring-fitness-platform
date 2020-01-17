// @flow

import * as React from 'react';

import {
  type GenericProgramModuleDataData,
  initialGenericProgramModuleDataData,
} from '../../helpers/programModuleData';

import { type ModuleEditorProps } from '.';
import GenericModuleSchedulingEditor from './GenericModuleSchedulingEditor';
import MultiStepActionEditor from './MultiStepActionEditor';

type Props = ModuleEditorProps<GenericProgramModuleDataData>;

export default function GenericProgramModuleDataDataEditor(props: Props) {
  const { data, onChange } = props;

  const onSchedulingChange = React.useCallback(
    (nextScheduling) => {
      onChange({
        ...data,
        scheduling: nextScheduling,
      });
    },
    [data, onChange],
  );

  const onActionChange = React.useCallback(
    (nextAction) => {
      onChange({
        ...data,
        action: nextAction,
      });
    },
    [data, onChange],
  );

  if (!data) {
    onChange(initialGenericProgramModuleDataData);
    return null;
  }

  return (
    <>
      <GenericModuleSchedulingEditor data={data.scheduling} onChange={onSchedulingChange} />
      <MultiStepActionEditor
        actionTypes={['blocks']}
        data={data.action}
        onChange={onActionChange}
        parentData={[['generic', data]]}
      />
    </>
  );
}
