// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { Duration } from 'luxon';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';

import { type ProgramCreateDialogConentTabMutation } from './__generated__/ProgramCreateDialogConentTabMutation.graphql';

const useMutation = createMutation<ProgramCreateDialogConentTabMutation>(graphql`
  mutation ProgramCreateDialogConentTabMutation($input: CreateProgramInput!) {
    createProgram(input: $input) {
      program {
        id
      }
    }
  }
`);
type Props = {|
  onCancel: () => void,
  setMode: (any) => void,
|};
export default function ProgramCreateDialogConentTab(props: Props) {
  const { onCancel, setMode } = props;

  const [name, nameInputProps] = useInputValue('');
  const [description, descriptionInputProps] = useInputValue('');
  const createProgram = useMutation();
  const createProgramTask = useAsyncTask(async () => {
    await createProgram({
      input: {
        name,
        description,
        duration: Duration.fromObject({ weeks: 4 }).toISO(),
        // isPublic: true,
        tagId: 'me',
      },
    });
    setMode('pick');
    // onComplete(createProgramResponse.createProgram);
  });

  const onCreateProgramFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      createProgramTask();
    },
    [createProgramTask],
  );

  return (
    <>
      <form onSubmit={onCreateProgramFormSubmit}>
        <DialogContent dividers>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField variant="outlined" label="Name" required {...nameInputProps} />
            <div style={{ height: 32 }} />
            <TextField
              variant="outlined"
              label="Description"
              required
              multiline
              rows="4"
              {...descriptionInputProps}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Create Program
          </Button>
        </DialogActions>
      </form>
    </>
  );
}
