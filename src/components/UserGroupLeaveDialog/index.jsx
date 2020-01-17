// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
// import UserSearchSelect from '../UserSearchSelect';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type UserGroupLeaveDialogRemoveUserFromUserGroupMutation } from './__generated__/UserGroupLeaveDialogRemoveUserFromUserGroupMutation.graphql';
import { type UserGroupLeaveDialog_userGroup as UserGroup } from './__generated__/UserGroupLeaveDialog_userGroup.graphql';
import { type UserGroupLeaveDialog_user as User } from './__generated__/UserGroupLeaveDialog_user.graphql';

const useMutation = createMutation<UserGroupLeaveDialogRemoveUserFromUserGroupMutation>(graphql`
  mutation UserGroupLeaveDialogRemoveUserFromUserGroupMutation(
    $input: RemoveUserFromUserGroupInput!
  ) {
    removeUserFromUserGroup(input: $input) {
      userGroup {
        ...UserGroupLeaveDialog_userGroup
        viewerIsMember
        viewerCanUpdate
      }
    }
  }
`);

const useUserFragment = createFragment<User>(graphql`
  fragment UserGroupLeaveDialog_user on User {
    id
    name
  }
`);
const useUserGroupFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupLeaveDialog_userGroup on UserGroup {
    id
    name
  }
`);

type Props = {|
  user: mixed,
  userGroup: mixed,
|};

export default createDashboardDialog<void, Props>(function UserGroupLeaveDialog(props) {
  const { open, onCancel, onComplete } = props;

  const user = useUserFragment(props.user);
  const userGroup = useUserGroupFragment(props.userGroup);
  const removeUserFromUserGroup = useMutation();
  const removeUserFromUserGroupTask = useAsyncTask(async () => {
    await removeUserFromUserGroup({
      input: {
        id: userGroup.id,
        userId: user.id,
      },
    });

    onComplete();
  });

  const onDeleteClick = React.useCallback(async () => {
    removeUserFromUserGroupTask();
  }, [removeUserFromUserGroupTask]);

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Leave Organization</DashboardDialogHeader>
        <DialogContent dividers>
          <DialogContentText>{`Are you sure you want to leave organization "${userGroup.name}"?`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={onDeleteClick}>
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
