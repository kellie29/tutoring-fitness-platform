// @flow

import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import invariant from 'invariant';

import { type BlocksActionMultipleChoiceFieldBlock } from '../../helpers/programModuleData';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';
import RequiredSwitch from './RequiredSwitch';

type Props = {
  data: BlocksActionMultipleChoiceFieldBlock | null,
  onChange: (data: BlocksActionMultipleChoiceFieldBlock | null) => void,
};

export default function BlocksActionMultipleChoiceFieldBlockEditor(props: Props) {
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

  const onAddChoiceClick = React.useCallback(() => {
    invariant(data, 'Expected "data"');
    onChange({ ...data, choices: [...data.choices, { title: '' }] });
  }, [data, onChange]);

  const onDeleteChoiceClick = React.useCallback(
    (index) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        choices: data.choices.filter((value, choiceIndex) => choiceIndex !== index),
      });
    },
    [data, onChange],
  );

  const onChoiceTitleChange = React.useCallback(
    (i, title) => {
      invariant(data, 'Expected "data"');
      const nextChoices = [...data.choices];
      nextChoices[i] = {
        ...data.choices[i],
        title,
      };

      onChange({
        ...data,
        choices: nextChoices,
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
    onChange({ type: 'multipleChoiceField', title: '', choices: [], required: true });
    return null;
  }

  return (
    <BlocksActionBlockEditor icon={<RadioButtonCheckedIcon />}>
      <Input
        placeholder="Question"
        fullWidth
        value={data.title}
        onChange={(event) => onTitleChange(event.target.value)}
        style={{ flexGrow: 1, marginRight: 8 }}
      />
      <div style={{ marginBottom: 8 }}>
        {data.choices.map((choice, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              placeholder="Option"
              fullWidth
              value={choice.title}
              onChange={(event) => onChoiceTitleChange(i, event.target.value)}
              style={{ flexGrow: 1, marginRight: 8 }}
            />
            <IconButton
              aria-label="Delete"
              onClick={() => {
                onDeleteChoiceClick(i);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <div style={{ flexGrow: 1 }} />
        <Button onClick={onAddChoiceClick} variant="contained">
          Add Choice
        </Button>
      </div>
      <RequiredSwitch required={data.required} onRequiredChange={onRequiredChange} />
    </BlocksActionBlockEditor>
  );
}
