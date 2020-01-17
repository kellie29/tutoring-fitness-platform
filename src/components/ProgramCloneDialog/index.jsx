// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { DialogContentText } from '@material-ui/core';

import { graphql, createFragment, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramCloneDialogCloneProgramMutation } from './__generated__/ProgramCloneDialogCloneProgramMutation.graphql';
import { type ProgramCloneDialog_program as Program } from './__generated__/ProgramCloneDialog_program.graphql';

const useMutation = createMutation<ProgramCloneDialogCloneProgramMutation>(graphql`
  mutation ProgramCloneDialogCloneProgramMutation($input: CloneProgramInput!) {
    cloneProgram(input: $input) {
      program {
        id
      }
    }
  }
`);

const useFragment = createFragment<Program>(graphql`
  fragment ProgramCloneDialog_program on Program {
    ...PresentableAvatar_presentable
    id
    name
    viewerCanUpdate
  }
`);

type Props = {|
  program: mixed,
|};

export default createDashboardDialog<any, Props>(function ProgramCloneDialog(props) {
  const { open, onCancel, onComplete } = props;

  const program = useFragment(props.program);
  const cloneProgram = useMutation();
  const cloneProgramTask = useAsyncTask(async () => {
    const response = await cloneProgram({
      input: {
        id: program.id,
        name: `Copy of ${program.name}`,
      },
    });

    onComplete(response.cloneProgram.program);
  });

  const onCloneClick = React.useCallback(async () => {
    cloneProgramTask();
  }, [cloneProgramTask]);

  return (
    <>
      <Dialog fullWidth open={open} onClose={onCancel}>
        <DashboardDialogHeader>Copy Program</DashboardDialogHeader>
        <DialogContent>
          <DialogContentText>
            {!program.viewerCanUpdate ? (
              <>
                You can not edit this program so a copy of it which you can edit will be created
                under your account.
              </>
            ) : (
              <>A copy of this program will be created under your account.</>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={onCloneClick}>
            Copy Program
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
