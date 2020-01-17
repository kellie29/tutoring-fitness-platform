// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import useInputValue from '../useInputValue';
import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type UserGroupUpdateDialogUpdateUserGroupMutation } from './__generated__/UserGroupUpdateDialogUpdateUserGroupMutation.graphql';
import { type UserGroupUpdateDialog_userGroup as UserGroup } from './__generated__/UserGroupUpdateDialog_userGroup.graphql';

const useMutation = createMutation<UserGroupUpdateDialogUpdateUserGroupMutation>(graphql`
  mutation UserGroupUpdateDialogUpdateUserGroupMutation($input: UpdateUserGroupInput!) {
    updateUserGroup(input: $input) {
      userGroup {
        ...UserGroupUpdateDialog_userGroup
      }
    }
  }
`);

const useFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupUpdateDialog_userGroup on UserGroup {
    id
    name
    description
  }
`);

type Props = {|
  userGroup: mixed,
|};

export default createDashboardDialog<any, Props>(function UserGroupUpdateDialog(props) {
  const { open, onCancel, onComplete } = props;

  const userGroup = useFragment(props.userGroup);

  const [name, nameInputProps] = useInputValue(userGroup.name);
  const [description, descriptionInputProps] = useInputValue(userGroup.description);
  const updateUserGroup = useMutation();
  const updateUserGroupTask = useAsyncTask(async () => {
    await updateUserGroup({
      input: {
        id: userGroup.id,
        name,
        description,
      },
    });

    onComplete();
  });

  const onSaveClick = React.useCallback(async () => {
    updateUserGroupTask();
  }, [updateUserGroupTask]);

  return (
    <>
      <Dialog fullWidth open={open} onClose={onCancel}>
        <DashboardDialogHeader>Edit Organization</DashboardDialogHeader>
        <DialogContent dividers>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              variant="outlined"
              label="Name"
              required
              {...nameInputProps}
              style={{ flex: 1 }}
            />
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
          <Button variant="contained" color="primary" onClick={onSaveClick}>
            Save Organization
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
