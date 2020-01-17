// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import invariant from 'invariant';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import UserGroupFilterSelectView from '../UserGroupFilterSelectView';
import UserFilterSelectView from '../UserFilterSelectView';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramTransferOwnershipDialogUpdateProgramMutation } from './__generated__/ProgramTransferOwnershipDialogUpdateProgramMutation.graphql';
import { type ProgramTransferOwnershipDialog_program as Program } from './__generated__/ProgramTransferOwnershipDialog_program.graphql';

const useMutation = createMutation<ProgramTransferOwnershipDialogUpdateProgramMutation>(graphql`
  mutation ProgramTransferOwnershipDialogUpdateProgramMutation($input: UpdateProgramInput!) {
    updateProgram(input: $input) {
      program {
        ...ProgramTransferOwnershipDialog_program
        owner {
          ... on User {
            id
          }
          ... on UserGroup {
            id
          }
        }
      }
    }
  }
`);

const useProgramFragment = createFragment<Program>(graphql`
  fragment ProgramTransferOwnershipDialog_program on Program {
    id
    name
  }
`);

type Props = {|
  program: mixed,
|};

export default createDashboardDialog<void, Props>(function ProgramTransferOwnershipDialog(props) {
  const { open, onCancel, onComplete } = props;

  const program = useProgramFragment(props.program);
  const [selectedTab, setSelectedTab] = React.useState('organization');
  const [selectedOrganizationId, setSelectedOrganizationId] = React.useState(null);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const updateProgram = useMutation();
  const updateProgramTask = useAsyncTask(async (ownerId) => {
    await updateProgram({
      input: {
        id: program.id,
        ownerId,
      },
    });

    onComplete();
  });

  const onTransferToOrganizationClick = React.useCallback(async () => {
    invariant(selectedOrganizationId, 'Expected "selectedOrganizationId"');
    updateProgramTask(selectedOrganizationId);
  }, [selectedOrganizationId, updateProgramTask]);

  const onTransferToUserClick = React.useCallback(async () => {
    invariant(selectedUserId, 'Expected "selectedUserId"');
    updateProgramTask(selectedUserId);
  }, [selectedUserId, updateProgramTask]);

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Transfer Program Ownership</DashboardDialogHeader>
        <Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)} centered>
          <Tab label="Organization" value="organization" />
          <Tab label="User" value="user" />
        </Tabs>
        {(() => {
          switch (selectedTab) {
            case 'organization': {
              return (
                <>
                  <DialogContent dividers style={{ height: '60vh' }}>
                    {/* <DialogContentText>{`Select an organization to transfer ownership of program "${program.name}" to:`}</DialogContentText> */}
                    <UserGroupFilterSelectView
                      // userId={userId}
                      value={selectedOrganizationId}
                      onValueChange={setSelectedOrganizationId}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onTransferToOrganizationClick}
                      disabled={!selectedOrganizationId}
                    >
                      Transfer
                    </Button>
                  </DialogActions>
                </>
              );
            }
            case 'user': {
              return (
                <>
                  <DialogContent dividers style={{ height: '60vh' }}>
                    {/* <DialogContentText>{`Select a user to transfer ownership of program "${program.name}" to:`}</DialogContentText> */}
                    <UserFilterSelectView
                      value={selectedUserId}
                      onValueChange={setSelectedUserId}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onTransferToUserClick}
                      disabled={!selectedUserId}
                    >
                      Transfer
                    </Button>
                  </DialogActions>
                </>
              );
            }
            default: {
              invariant(false, 'Invalid "selectedTab"');
              // $FlowFixMe
              return null;
            }
          }
        })()}
      </Dialog>
    </>
  );
});
