// @flow

import * as React from 'react';

import { type ReferenceAction } from '../../helpers/programModuleData';
import ProgramModulePicker from '../ProgramModulePicker';

import { type DataEditorProps } from '.';

type Props = DataEditorProps<ReferenceAction>;

export default function ReferenceActionEditor(props: Props) {
  const { data, onChange } = props;

  const onActionModuleIdChange = React.useCallback(
    (actionModuleId) => {
      onChange({
        ...data,
        actionModuleId,
      });
    },
    [data, onChange],
  );

  if (!data) {
    onChange({ type: 'reference', actionModuleId: null });
    return null;
  }

  return (
    <>
      <div style={{ flex: 1, display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
        <ProgramModulePicker value={data.actionModuleId} onChange={onActionModuleIdChange} />
      </div>
    </>
  );
}
