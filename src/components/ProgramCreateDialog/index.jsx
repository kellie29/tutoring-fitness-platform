// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import { Duration } from 'luxon';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramCreateDialogCreateProgramMutation } from './__generated__/ProgramCreateDialogCreateProgramMutation.graphql';

const useMutation = createMutation<ProgramCreateDialogCreateProgramMutation>(graphql`
  mutation ProgramCreateDialogCreateProgramMutation($input: CreateProgramInput!) {
    createProgram(input: $input) {
      program {
        id
      }
    }
  }
`);

export default createDashboardDialog<any, {}>(function ProgramCreateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const [name, nameInputProps] = useInputValue('');
  const [description, descriptionInputProps] = useInputValue('');
  const createProgram = useMutation();
  const createProgramTask = useAsyncTask(async () => {
    const createProgramResponse = await createProgram({
      input: {
        name,
        description,
        duration: Duration.fromObject({ weeks: 4 }).toISO(),
        // isPublic: true,
        tagId: 'me',
      },
    });

    onComplete(createProgramResponse.createProgram.program);
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
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>New Program</DashboardDialogHeader>
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
      </Dialog>
    </>
  );
});
