// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import invariant from 'invariant';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import UserFilterSelectView from '../UserFilterSelectView';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type UserGroupInviteDialogInviteUserToUserGroupMutation } from './__generated__/UserGroupInviteDialogInviteUserToUserGroupMutation.graphql';
import { type UserGroupInviteDialog_userGroup as UserGroup } from './__generated__/UserGroupInviteDialog_userGroup.graphql';

const useMutation = createMutation<UserGroupInviteDialogInviteUserToUserGroupMutation>(graphql`
  mutation UserGroupInviteDialogInviteUserToUserGroupMutation($input: InviteUserToUserGroupInput!) {
    inviteUserToUserGroup(input: $input) {
      userGroup {
        ...UserGroupInviteDialog_userGroup
      }
    }
  }
`);

const useFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupInviteDialog_userGroup on UserGroup {
    id
    name
  }
`);

type Props = {|
  userGroup: mixed,
|};

export default createDashboardDialog<void, Props>(function UserGroupInviteDialog(props) {
  const { open, onCancel, onComplete } = props;

  const userGroup = useFragment(props.userGroup);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const inviteUserToUserGroup = useMutation();
  const deleteUserGroupTask = useAsyncTask(async () => {
    invariant(selectedUserId, 'Expected "selectedUserId"');
    await inviteUserToUserGroup({
      input: {
        id: userGroup.id,
        userId: selectedUserId,
      },
    });

    onComplete();
  });

  const onDeleteClick = React.useCallback(async () => {
    deleteUserGroupTask();
  }, [deleteUserGroupTask]);

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Invite to Organization</DashboardDialogHeader>
        <DialogContent dividers style={{ height: '60vh' }}>
          <UserFilterSelectView value={selectedUserId} onValueChange={setSelectedUserId} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onDeleteClick}
            disabled={!selectedUserId}
          >
            Invite
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
