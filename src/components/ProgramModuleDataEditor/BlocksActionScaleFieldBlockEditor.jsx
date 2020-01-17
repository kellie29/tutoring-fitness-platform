// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { type BlocksActionScaleFieldBlock } from '../../helpers/programModuleData';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';
import RequiredSwitch from './RequiredSwitch';

const limited = true;

type Props = {
  data: BlocksActionScaleFieldBlock | null,
  onChange: (data: BlocksActionScaleFieldBlock | null) => void,
};

export default function BlocksActionScaleFieldBlockEditor(props: Props) {
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

  const onMinChange = React.useCallback(
    (min) => {
      onChange({
        ...data,
        min: parseInt(min, 10),
      });
    },
    [data, onChange],
  );

  const onMaxChange = React.useCallback(
    (max) => {
      onChange({
        ...data,
        max: parseInt(max, 10),
      });
    },
    [data, onChange],
  );

  const onStepChange = React.useCallback(
    (step) => {
      onChange({
        ...data,
        step: parseInt(step, 10),
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
    onChange({ type: 'scaleField', title: '', min: 0, max: 10, step: 1, required: true });
    return null;
  }

  return (
    <BlocksActionBlockEditor icon={<LinearScaleIcon />}>
      <TextField
        label="Title"
        value={data.title}
        onChange={(event) => onTitleChange(event.target.value)}
        style={{ flexGrow: 1, marginRight: 8 }}
      />
      {limited ? (
        <FormControl style={{ flexGrow: 1 }}>
          <InputLabel htmlFor="min">Minimum Value</InputLabel>
          <Select
            value={data.min}
            onChange={(event) => onMinChange(event.target.value)}
            inputProps={{
              name: 'min',
              id: 'min',
            }}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <TextField
          label="Minimum Value"
          type="number"
          value={data.min}
          onChange={(event) => onMinChange(event.target.value)}
          style={{ flexGrow: 1, marginRight: 8 }}
        />
      )}
      <div style={{ width: 8 }} />
      <TextField
        label="Maximum Value"
        type="number"
        value={data.max}
        inputProps={{
          min: 2,
          max: limited ? 10 : Number.MAX_SAFE_INTEGER,
        }}
        onChange={(event) => onMaxChange(event.target.value)}
        style={{ flexGrow: 1, marginRight: 8 }}
      />
      {!limited && (
        <TextField
          label="Step"
          type="number"
          value={data.step}
          onChange={(event) => onStepChange(event.target.value)}
          style={{ flexGrow: 1, marginRight: 8 }}
        />
      )}
      <RequiredSwitch required={data.required} onRequiredChange={onRequiredChange} />
    </BlocksActionBlockEditor>
  );
}
