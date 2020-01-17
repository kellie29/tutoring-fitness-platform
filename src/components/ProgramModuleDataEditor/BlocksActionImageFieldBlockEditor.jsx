// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import PhotoIcon from '@material-ui/icons/Photo';

import { type BlocksActionImageFieldBlock } from '../../helpers/programModuleData';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';
import RequiredSwitch from './RequiredSwitch';

type Props = {
  data: BlocksActionImageFieldBlock | null,
  onChange: (data: BlocksActionImageFieldBlock | null) => void,
};

export default function BlocksActionImageFieldBlockEditor(props: Props) {
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
    onChange({ type: 'imageField', title: '', required: true });
    return null;
  }

  return (
    <BlocksActionBlockEditor icon={<PhotoIcon />}>
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
