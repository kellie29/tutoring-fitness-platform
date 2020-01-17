// @flow

import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import { URLSearchParams } from 'whatwg-url';
import { Tabs, Tab } from '@material-ui/core';

import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import ProgramAddProgramModuleDialogCreateTab from './ProgramAddProgramModuleDialogCreateTab';
import ProgramAddProgramModuleDialogPickTab from './ProgramAddProgramModuleDialogPickTab';

type Props = {|
  programId?: string,
|};

// TODO: Not like this
// const defaultAvailableTypes = ['reminder', 'action'];
const defaultAvailableTypes = ['generic'];

export default createDashboardDialog<any, Props>(function ProgramAddProgramModuleDialog(props) {
  const { programId, open, onCancel, onComplete } = props;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeParam = searchParams.get('type');
  const availableTypes = React.useMemo(() => (typeParam ? [typeParam] : defaultAvailableTypes), [
    typeParam,
  ]);

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
        <DashboardDialogHeader>Add Module</DashboardDialogHeader>
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
          <ProgramAddProgramModuleDialogPickTab
            availableTypes={availableTypes}
            programId={programId}
            onCancel={onCancel}
            onComplete={onComplete}
          />
        ) : null}
        {mode === 'create' ? (
          <ProgramAddProgramModuleDialogCreateTab
            availableTypes={availableTypes}
            programId={programId}
            onCancel={onCancel}
            onComplete={onComplete}
          />
        ) : null}
      </Dialog>
    </>
  );
});
