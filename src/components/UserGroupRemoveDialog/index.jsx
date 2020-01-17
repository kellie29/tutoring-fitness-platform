// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import invariant from 'invariant';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
// import UserSearchSelect from '../UserSearchSelect';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type UserGroupRemoveDialogRemoveUserFromUserGroupMutation } from './__generated__/UserGroupRemoveDialogRemoveUserFromUserGroupMutation.graphql';
import { type UserGroupRemoveDialog_userGroup as UserGroup } from './__generated__/UserGroupRemoveDialog_userGroup.graphql';

const useMutation = createMutation<UserGroupRemoveDialogRemoveUserFromUserGroupMutation>(graphql`
  mutation UserGroupRemoveDialogRemoveUserFromUserGroupMutation(
    $input: RemoveUserFromUserGroupInput!
  ) {
    removeUserFromUserGroup(input: $input) {
      userGroup {
        ...UserGroupRemoveDialog_userGroup
      }
    }
  }
`);

const useFragment = createFragment<UserGroup>(graphql`
  fragment UserGroupRemoveDialog_userGroup on UserGroup {
    id
    name
  }
`);

type Props = {|
  userGroup: mixed,
|};

export default createDashboardDialog<void, Props>(function UserGroupRemoveDialog(props) {
  const { open, onCancel, onComplete } = props;
  const match = useRouteMatch();

  const userGroup = useFragment(props.userGroup);

  const selectedClient = match && match.params.userId ? { id: match.params.userId } : null;

  // const [selectedClient, setSelectedClient] = React.useState(null);
  const removeUserFromUserGroup = useMutation();
  const removeUserFromUserGroupTask = useAsyncTask(async () => {
    invariant(selectedClient, 'Expected "selectedClient"');
    await removeUserFromUserGroup({
      input: {
        id: userGroup.id,
        userId: selectedClient.id,
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
        <DashboardDialogHeader>Remove User from Organization</DashboardDialogHeader>
        <DialogContent dividers>
          <DialogContentText>{`Are you sure you want to remove this user from organization "${userGroup.name}"?`}</DialogContentText>
          {/* <UserSearchSelect
            value={selectedClient}
            onChange={setSelectedClient}
            placeholder="Search a user"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onDeleteClick}
            disabled={!selectedClient}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
