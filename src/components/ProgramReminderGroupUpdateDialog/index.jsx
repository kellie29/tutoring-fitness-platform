// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import { graphql, createMutation, createQuery } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramReminderGroupUpdateDialogUpdateProgramMutation } from './__generated__/ProgramReminderGroupUpdateDialogUpdateProgramMutation.graphql';
import { type ProgramReminderGroupUpdateDialogQuery } from './__generated__/ProgramReminderGroupUpdateDialogQuery.graphql';

const useMutation = createMutation<ProgramReminderGroupUpdateDialogUpdateProgramMutation>(
  graphql`
    mutation ProgramReminderGroupUpdateDialogUpdateProgramMutation($input: UpdateProgramInput!) {
      updateProgram(input: $input) {
        program {
          id
          reminderGroupName
        }
      }
    }
  `,
);

const useQuery = createQuery<ProgramReminderGroupUpdateDialogQuery>(graphql`
  query ProgramReminderGroupUpdateDialogQuery($id: ID) {
    program(id: $id) {
      id
      reminderGroupName
    }
  }
`);

export default createDashboardDialog<any, any>(function ProgramReminderGroupUpdateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const match = useRouteMatch();

  const programId = (match && match.params.programId) || null;

  const query = useQuery({ id: programId });

  const program = query.props?.program || null;

  const [name, setName] = React.useState('');

  React.useEffect(() => {
    const reminderGroupName = query.props?.program?.reminderGroupName;

    setName(reminderGroupName ?? 'Reminders');
  }, [query]);

  const updateProgram = useMutation();
  const updateProgramTask = useAsyncTask(async () => {
    if (program) {
      const updateProgramResponse = await updateProgram({
        input: {
          reminderGroupName: name,
          id: program.id,
        },
      });

      onComplete(updateProgramResponse.updateProgram.program);
    }
  });

  const onUpdateProgramFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      updateProgramTask();
    },
    [updateProgramTask],
  );

  if (!program) {
    return null;
  }

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Update Reminders Group</DashboardDialogHeader>
        <form onSubmit={onUpdateProgramFormSubmit}>
          <DialogContent dividers>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                variant="outlined"
                label="Group Name"
                type="text"
                name="reminderGroupName"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
