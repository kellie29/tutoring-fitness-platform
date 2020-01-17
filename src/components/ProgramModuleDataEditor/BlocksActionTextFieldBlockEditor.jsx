// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import ShortTextIcon from '@material-ui/icons/ShortText';

import { type BlocksActionTextFieldBlock } from '../../helpers/programModuleData';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';
import RequiredSwitch from './RequiredSwitch';

type Props = {
  data: BlocksActionTextFieldBlock | null,
  onChange: (data: BlocksActionTextFieldBlock | null) => void,
};

export default function BlocksActionTextFieldBlockEditor(props: Props) {
  const { data, onChange } = props;

  const onTitleChange = React.useCallback(
    (title) => {
      onChange({
        ...data,
        title,
      });
    },
    [data, onChange],
  );

  const onRequiredChange = React.useCallback(
    (required) => {
      onChange({
        ...data,
        required,
      });
    },
    [data, onChange],
  );

  if (!data) {
    onChange({ type: 'textField', title: '', required: true });
    return null;
  }

  return (
    <BlocksActionBlockEditor icon={<ShortTextIcon />}>
      <TextField
        label="Title"
        value={data.title}
        onChange={(event) => onTitleChange(event.target.value)}
        style={{ flexGrow: 1, marginRight: 8 }}
      />
      <RequiredSwitch required={data.required} onRequiredChange={onRequiredChange} />
    </BlocksActionBlockEditor>
  );
}
