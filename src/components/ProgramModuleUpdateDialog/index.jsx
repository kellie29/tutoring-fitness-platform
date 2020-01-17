// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { useRouteMatch } from 'react-router-dom';
import invariant from 'invariant';

import { graphql, createQuery, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import ProgramModuleEditor from '../ProgramModuleEditor';
import MobileAppEmulator, { EmulatorStateProvider } from '../MobileAppEmulator';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramModuleUpdateDialogQuery } from './__generated__/ProgramModuleUpdateDialogQuery.graphql';
import { type ProgramModuleUpdateDialogUpdateProgramModuleMutation } from './__generated__/ProgramModuleUpdateDialogUpdateProgramModuleMutation.graphql';

const useMutation = createMutation<ProgramModuleUpdateDialogUpdateProgramModuleMutation>(graphql`
  mutation ProgramModuleUpdateDialogUpdateProgramModuleMutation($input: UpdateProgramModuleInput!) {
    updateProgramModule(input: $input) {
      programModule {
        id
        name
        description
        type
        data
      }
    }
  }
`);

const useQuery = createQuery<ProgramModuleUpdateDialogQuery>(graphql`
  query ProgramModuleUpdateDialogQuery($programModuleId: ID) {
    programModule(id: $programModuleId) {
      ...ProgramModuleEditor_programModule
      id
      name
      description
      type
      data
      programModuleGroup {
        id
        name
      }
    }
  }
`);

type CompleteValue = $NonMaybeType<
  $ElementType<$ElementType<ProgramModuleUpdateDialogQuery, 'response'>, 'programModule'>,
>;

export default createDashboardDialog<CompleteValue, {}>(function ProgramModuleUpdateDialog(props) {
  const { open, onCancel, onComplete } = props;
  const match = useRouteMatch();

  const query = useQuery({
    // $FlowFixMe
    programModuleId: match?.params.programModuleId,
  });
  const programModule = query.props?.programModule || null;
  const [updatedModule, setUpdatedModule] = React.useState(null);
  const updateProgramModule = useMutation();
  const updateProgramModuleTask = useAsyncTask(async () => {
    invariant(updatedModule, 'Expected "updatedModule"');
    const programModuleGroupId =
      updatedModule.programModuleGroupId === 'reminder' ||
      updatedModule.programModuleGroupId === 'none'
        ? null
        : updatedModule.programModuleGroupId;
    await updateProgramModule({
      input: {
        id: updatedModule.id,
        type: updatedModule.type,
        name: updatedModule.name,
        description: updatedModule.description,
        data: updatedModule.data,
        programModuleGroupId,
      },
    });
  });

  const onModuleChange = React.useCallback((module) => {
    setUpdatedModule(module);
  }, []);

  const onSaveClick = React.useCallback(() => {
    updateProgramModuleTask();
  }, [updateProgramModuleTask]);

  const onSaveAndCloseClick = React.useCallback(async () => {
    invariant(programModule, 'Expected "programModule"');
    await updateProgramModuleTask();
    onComplete(programModule);
  }, [onComplete, programModule, updateProgramModuleTask]);

  if (!query.props) {
    return null;
  }

  if (open && !programModule) {
    throw new Error('Not found');
  }

  return (
    <>
      <Dialog fullWidth maxWidth="md" open={open} onClose={onCancel}>
        <DashboardDialogHeader>Edit Module</DashboardDialogHeader>
        <DialogContent dividers style={{ height: '60vh' }}>
          <EmulatorStateProvider>
            <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
              <div style={{ flex: 1, overflow: 'hidden', overflowY: 'auto' }}>
                {programModule && (
                  <ProgramModuleEditor programModule={programModule} onChange={onModuleChange} />
                )}
              </div>
              <div style={{ flex: '0 0 16px' }} />
              <MobileAppEmulator emulatable={{ type: 'programModule', module: updatedModule }} />
            </div>
          </EmulatorStateProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Close</Button>
          <Button variant="contained" onClick={onSaveClick}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={onSaveAndCloseClick}>
            Save &amp; Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
