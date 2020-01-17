// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import invariant from 'invariant';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';
import UserGroupFilterSelectView from '../UserGroupFilterSelectView';
import UserFilterSelectView from '../UserFilterSelectView';

import { type ProgramModuleTransferOwnershipDialog_programModule as ProgramModule } from './__generated__/ProgramModuleTransferOwnershipDialog_programModule.graphql';
import { type ProgramModuleTransferOwnershipDialogUpdateProgramMutation } from './__generated__/ProgramModuleTransferOwnershipDialogUpdateProgramMutation.graphql';

const useMutation = createMutation<ProgramModuleTransferOwnershipDialogUpdateProgramMutation>(graphql`
  mutation ProgramModuleTransferOwnershipDialogUpdateProgramMutation(
    $input: UpdateProgramModuleInput!
  ) {
    updateProgramModule(input: $input) {
      programModule {
        ...ProgramModuleTransferOwnershipDialog_programModule
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

const useFragment = createFragment<ProgramModule>(graphql`
  fragment ProgramModuleTransferOwnershipDialog_programModule on ProgramModule {
    id
    name
  }
`);

type Props = {|
  programModule: mixed,
|};

export default createDashboardDialog<void, Props>(function ProgramModuleTransferOwnershipDialog(
  props,
) {
  const { open, onCancel, onComplete } = props;

  const programModule = useFragment(props.programModule);
  const [selectedTab, setSelectedTab] = React.useState('organization');
  const [selectedOrganizationId, setSelectedOrganizationId] = React.useState(null);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const updateProgramModule = useMutation();
  const updateProgramModuleTask = useAsyncTask(async (ownerId) => {
    await updateProgramModule({
      input: {
        id: programModule.id,
        ownerId,
      },
    });

    onComplete();
  });

  const onTransferToOrganizationClick = React.useCallback(async () => {
    invariant(selectedOrganizationId, 'Expected "selectedOrganizationId"');
    updateProgramModuleTask(selectedOrganizationId);
  }, [selectedOrganizationId, updateProgramModuleTask]);

  const onTransferToUserClick = React.useCallback(async () => {
    invariant(selectedUserId, 'Expected "selectedUserId"');
    updateProgramModuleTask(selectedUserId);
  }, [selectedUserId, updateProgramModuleTask]);

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth>
        <DashboardDialogHeader>Transfer Module Ownership</DashboardDialogHeader>
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
                    <DialogContentText>{`Select an organization to transfer ownership of module "${programModule.name}" to:`}</DialogContentText>
                    <UserGroupFilterSelectView
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
                    <DialogContentText>{`Select a user to transfer ownership of module "${programModule.name}" to:`}</DialogContentText>
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
