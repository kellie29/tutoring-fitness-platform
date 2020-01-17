// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import invariant from 'invariant';

import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import ProgramModuleFilterSelectView from '../ProgramModuleFilterSelectView';

import { type ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation } from './__generated__/ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation.graphql';

const useMutation = createMutation<ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation>(graphql`
  mutation ProgramAddProgramModuleDialogPickTabCloneProgramModuleMutation(
    $input: CloneProgramModuleInput!
  ) {
    cloneProgramModule(input: $input) {
      programModule {
        id
      }
    }
  }
`);

type Props = {|
  // eslint-disable-next-line react/no-unused-prop-types
  availableTypes: $ReadOnlyArray<'generic' | 'reminder' | 'action'>,
  programId?: string,
  onCancel: () => void,
  onComplete: (any) => void,
|};

export default function ProgramAddProgramModuleDialogPickTab(props: Props) {
  const { programId, onCancel, onComplete } = props;

  const [selectedProgramModuleId, setSelectedProgramModuleId] = React.useState(null);
  const cloneProgramModule = useMutation();
  const cloneProgramModuleTask = useAsyncTask(async () => {
    invariant(selectedProgramModuleId, 'Expected "selectedProgramModuleId"');

    const cloneProgramModuleResponse = await cloneProgramModule({
      input: {
        id: selectedProgramModuleId,
        programId: programId || null,
      },
    });

    onComplete(cloneProgramModuleResponse.cloneProgramModule.programModule);
  });

  const onCreateProgramModuleFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      cloneProgramModuleTask();
    },
    [cloneProgramModuleTask],
  );

  return (
    <form
      onSubmit={onCreateProgramModuleFormSubmit}
      style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '50vh',
          overflow: 'hidden',
        }}
      >
        <ProgramModuleFilterSelectView
          value={selectedProgramModuleId}
          onValueChange={setSelectedProgramModuleId}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!selectedProgramModuleId}
        >
          Create Module
        </Button>
      </DialogActions>
    </form>
  );
}
