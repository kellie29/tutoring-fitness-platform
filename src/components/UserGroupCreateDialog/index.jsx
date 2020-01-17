// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import useInputValue from '../useInputValue';
import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type UserGroupCreateDialogCreateUserGroupMutation } from './__generated__/UserGroupCreateDialogCreateUserGroupMutation.graphql';

const useMutation = createMutation<UserGroupCreateDialogCreateUserGroupMutation>(graphql`
  mutation UserGroupCreateDialogCreateUserGroupMutation($input: CreateUserGroupInput!) {
    createUserGroup(input: $input) {
      userGroup {
        id
        name
        description
      }
    }
  }
`);

export default createDashboardDialog<any, {}>(function UserGroupCreateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const [name, nameInputProps] = useInputValue('');
  const [description, descriptionInputProps] = useInputValue('');
  const createUserGroup = useMutation();
  const createUserGroupTask = useAsyncTask(async () => {
    const createUserGroupResponse = await createUserGroup({
      input: {
        name,
        description,
      },
    });

    onComplete(createUserGroupResponse.createUserGroup.userGroup);
  });

  const onCreateUserGroupFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      createUserGroupTask();
    },
    [createUserGroupTask],
  );

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>New Organization</DashboardDialogHeader>
        <form onSubmit={onCreateUserGroupFormSubmit}>
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
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
});
