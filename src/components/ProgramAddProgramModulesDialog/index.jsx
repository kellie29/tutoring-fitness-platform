// @flow

import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { DialogContent, DialogActions, Button, Tabs, Tab } from '@material-ui/core';

import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';
import ProgramFilterSelectView from '../ProgramFilterSelectView';
import { createMutation, graphql } from '../../api';
import useAsyncTask from '../useAsyncTask';

import ProgramCreateDialogConentTab from './ProgramCreateDialogConentTab';
import { type ProgramAddProgramModulesDialogMutation } from './__generated__/ProgramAddProgramModulesDialogMutation.graphql';

const useMutation = createMutation<ProgramAddProgramModulesDialogMutation>(graphql`
  mutation ProgramAddProgramModulesDialogMutation($input: CloneProgramModulesInput!) {
    cloneProgramModules(input: $input) {
      programModules {
        id
        program {
          id
        }
        programModuleGroup {
          id
        }
      }
    }
  }
`);

type Props = {|
  programModuleIds: $ReadOnlyArray<string>,
|};

type CompleteValue = $NonMaybeType<
  $ElementType<
    $ElementType<
      $ElementType<ProgramAddProgramModulesDialogMutation, 'response'>,
      'cloneProgramModules',
    >,
    'programModules',
  >,
>;

export default createDashboardDialog<CompleteValue, Props>(function ProgramAddProgramModulesDialog(
  props,
) {
  const { programModuleIds, open, onCancel, onComplete } = props;

  const [selectedProgramId, setSelectedProgramId] = React.useState(null);
  const cloneProgramModules = useMutation();
  const cloneProgramModulesTask = useAsyncTask(async () => {
    const response = await cloneProgramModules({
      input: {
        ids: programModuleIds,
        programId: selectedProgramId,
      },
    });
    onComplete(response.cloneProgramModules.programModules);
  });

  const onCreateProgramModuleFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      cloneProgramModulesTask();
    },
    [cloneProgramModulesTask],
  );
  const [mode, setMode] = React.useState<'pick' | 'create'>('pick');
  const onModeChange = React.useCallback((event, nextMode) => {
    setMode(nextMode);
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        fullWidth
        PaperProps={{ style: { overflow: 'hidden' } }}
      >
        <DashboardDialogHeader>Add Modules to Program</DashboardDialogHeader>
        <Tabs
          value={mode}
          onChange={onModeChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Choose Existing" value="pick" />
          <Tab label="Create New" value="create" />
        </Tabs>
        {mode === 'pick' ? (
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '50vh',
                overflow: 'hidden',
              }}
            >
              <DialogContent dividers>
                <ProgramFilterSelectView
                  value={selectedProgramId}
                  onValueChange={setSelectedProgramId}
                />
              </DialogContent>
            </div>
            <DialogActions>
              <Button onClick={onCancel}>Cancel</Button>
              <Button onClick={onCreateProgramModuleFormSubmit} variant="contained" color="primary">
                Add Modules
              </Button>
              {selectedProgramId ? (
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/dashboard/programs/view/${selectedProgramId}/modules/create?type=generic`}
                >
                  Copy & Add modules
                </Button>
              ) : (
                <Button variant="contained" color="primary" disabled>
                  Copy & Add modules
                </Button>
              )}
            </DialogActions>
          </div>
        ) : null}
        {mode === 'create' ? (
          <ProgramCreateDialogConentTab onCancel={onCancel} setMode={setMode} />
        ) : null}
      </Dialog>
    </>
  );
});
