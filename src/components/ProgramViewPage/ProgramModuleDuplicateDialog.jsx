// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import invariant from 'invariant';

import { graphql, createMutation, createQuery } from '../../api';
import useAsyncTask from '../useAsyncTask';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramModuleDuplicateDialogCloneProgramModuleMutation } from './__generated__/ProgramModuleDuplicateDialogCloneProgramModuleMutation.graphql';
import { type ProgramModuleDuplicateDialogQuery } from './__generated__/ProgramModuleDuplicateDialogQuery.graphql';

const useMutation = createMutation<ProgramModuleDuplicateDialogCloneProgramModuleMutation>(graphql`
  mutation ProgramModuleDuplicateDialogCloneProgramModuleMutation(
    $input: CloneProgramModuleInput!
  ) {
    cloneProgramModule(input: $input) {
      programModule {
        id
      }
    }
  }
`);

const useQuery = createQuery<ProgramModuleDuplicateDialogQuery>(graphql`
  query ProgramModuleDuplicateDialogQuery($id: ID) {
    programModule(id: $id) {
      id
      name
      program {
        id
      }
    }
  }
`);

export default createDashboardDialog<any, {}>(function ProgramModuleDuplicateDialog(props) {
  const { open, onCancel, onComplete } = props;
  const match = useRouteMatch();

  const query = useQuery({
    // $FlowFixMe
    id: match?.params.programModuleId,
  });
  const programModule = query.props?.programModule || null;

  const duplicateProgramModule = useMutation();
  const duplicateProgramModuleTask = useAsyncTask(async () => {
    invariant(programModule, 'Expected "programModule"');

    const response = await duplicateProgramModule({
      input: {
        id: programModule.id,
        programId: programModule.program?.id,
        name: `Copy of ${programModule.name}`,
      },
    });

    onComplete(response.cloneProgramModule.programModule);
  });

  const onDuplicateClick = React.useCallback(async () => {
    duplicateProgramModuleTask();
  }, [duplicateProgramModuleTask]);

  if (!query.props) {
    return null;
  }

  if (!open) return null;

  if (open && !programModule) {
    throw new Error('Not found');
  }

  const duplicateMessage = (
    <FormattedMessage
      id="ProgramModuleDuplicateDialog.title"
      defaultMessage="Duplicate Module"
      values={programModule}
    />
  );

  return (
    <>
      <Dialog open={open} onClose={onCancel}>
        <DashboardDialogHeader>{duplicateMessage}</DashboardDialogHeader>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage
              id="ProgramModuleDuplicateDialog.message"
              defaultMessage={`
                Are you sure you want to duplicate "{name}"?
              `}
              values={programModule}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>
            <FormattedMessage id="ProgramModuleDuplicateDialog.cancel" defaultMessage="Cancel" />
          </Button>
          <Button variant="contained" color="primary" onClick={onDuplicateClick}>
            {duplicateMessage}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
