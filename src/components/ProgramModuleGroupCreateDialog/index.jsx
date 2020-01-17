// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import invariant from 'invariant';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation } from './__generated__/ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation.graphql';

const useMutation = createMutation<ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation>(
  graphql`
    mutation ProgramModuleGroupCreateDialogCreateProgramModuleGroupMutation(
      $input: CreateProgramModuleGroupInput!
    ) {
      createProgramModuleGroup(input: $input) {
        programModuleGroup {
          id
          name
        }
      }
    }
  `,
);

export default createDashboardDialog<any, {}>(function ProgramModuleGroupCreateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const match = useRouteMatch();

  const programId = match && match.params.programId;

  const [name, nameInputProps] = useInputValue('');
  const createProgramModuleGroup = useMutation();
  const createProgramModuleGroupTask = useAsyncTask(async () => {
    invariant(programId, 'Expected "programId"');
    const createProgramModuleGroupResponse = await createProgramModuleGroup({
      input: {
        name,
        programId,
      },
    });

    onComplete(createProgramModuleGroupResponse.createProgramModuleGroup.programModuleGroup);
  });

  const onCreateProgramModuleGroupFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      createProgramModuleGroupTask();
    },
    [createProgramModuleGroupTask],
  );

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>New Module Group</DashboardDialogHeader>
        <form onSubmit={onCreateProgramModuleGroupFormSubmit}>
          <DialogContent dividers>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField
                variant="outlined"
                label="Module Group Name"
                type="text"
                name="moduleGroupName"
                required
                {...nameInputProps}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
