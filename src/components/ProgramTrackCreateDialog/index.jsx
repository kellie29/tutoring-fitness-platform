// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { FormattedMessage } from 'react-intl';
import { DateTime } from 'luxon';
import { Stepper, StepButton, Step, TextField, Divider } from '@material-ui/core';
import invariant from 'invariant';

import { graphql, createMutation } from '../../api';
import useAsyncTask from '../useAsyncTask';
import ClientProfileFilterSelectView from '../ClientProfileFilterSelectView';
import useDateInputValue from '../useDateInputValue';
import createDashboardDialog, { DashboardDialogHeader } from '../createDashboardDialog';

import { type ProgramTrackCreateDialogMutation } from './__generated__/ProgramTrackCreateDialogMutation.graphql';
import ProgramSelectStepContent from './ProgramSelectStepContent';
import ProgramPreviewStepContent from './ProgramPreviewStepContent';

const useMutation = createMutation<ProgramTrackCreateDialogMutation>(graphql`
  mutation ProgramTrackCreateDialogMutation($input: CreateProgramTrackInput!) {
    createProgramTrack(input: $input) {
      programTrack {
        id
        user {
          id
        }
        clientProfile {
          id
        }
      }
    }
  }
`);

type CompleteValue = $NonMaybeType<
  $ElementType<
    $ElementType<$ElementType<ProgramTrackCreateDialogMutation, 'response'>, 'createProgramTrack'>,
    'programTrack',
  >,
>;

export default createDashboardDialog<CompleteValue, {}>(function ProgramTrackCreateDialog(props) {
  const { open, onCancel, onComplete } = props;
  const match = useRouteMatch();
  const params = match ? match.params : {};

  const [selectedProgramId, setSelectedProgramId] = React.useState(null);
  const [selectedClientProfileId, setSelectedClientProfileId] = React.useState(null);
  const programId = params.programId || selectedProgramId;
  const programIdSelectionEnabled = !params.programId;
  const clientProfileId = params.clientProfileId || selectedClientProfileId;
  const clientProfileIdSelectionEnabled = !params.clientProfileId;
  const [startDate, startDateInputProps] = useDateInputValue(DateTime.utc());
  const createProgramTrack = useMutation();
  const createProgramTrackTask = useAsyncTask(async () => {
    invariant(programId, 'Expected "programId"');
    const response = await createProgramTrack({
      input: {
        programId,
        clientProfileId,
        startDate: startDate.toISO(),
      },
    });

    onComplete(response.createProgramTrack.programTrack);
  });

  const onCancelClick = React.useCallback(() => {
    onCancel();
  }, [onCancel]);

  const onSubmitClick = React.useCallback(async () => {
    createProgramTrackTask();
  }, [createProgramTrackTask]);

  const [activeStep, setActiveStep] = React.useState(0);

  const onBackClick = React.useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [activeStep]);
  const onNextClick = React.useCallback(() => {
    setActiveStep(activeStep + 1);
  }, [activeStep]);

  const selectClientProfileId = React.useCallback(
    (id: string | null) => {
      if (id === selectedClientProfileId) {
        setSelectedClientProfileId(null);
      } else {
        setSelectedClientProfileId(id);
      }
    },
    [selectedClientProfileId],
  );

  const steps = [];
  if (programIdSelectionEnabled) {
    steps.push({
      label: 'Select a Program',
      maxWidth: 'sm',
      completed: !!selectedProgramId,
      content: (
        <ProgramSelectStepContent value={selectedProgramId} onValueChange={setSelectedProgramId} />
      ),
    });
  }
  if (clientProfileIdSelectionEnabled) {
    steps.push({
      label: 'Select a Client',
      maxWidth: 'sm',
      completed: !!selectedClientProfileId,
      content: (
        <ClientProfileFilterSelectView
          value={selectedClientProfileId}
          onValueChange={selectClientProfileId}
        />
      ),
    });
  }
  steps.push({
    label: 'Adjust Program',
    maxWidth: 'sm',
    completed: true,
    content: (
      <TextField
        {...startDateInputProps}
        variant="outlined"
        label="Start Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    ),
  });
  steps.push({
    label: 'Preview',
    maxWidth: 'md',
    completed: true,
    content: programId ? (
      <ProgramPreviewStepContent programId={programId} startDate={startDate} />
    ) : null,
  });

  const maxWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
  const maxWidth = maxWidths[Math.max(...steps.map((step) => maxWidths.indexOf(step.maxWidth)))];

  const currentStep = steps[activeStep];

  return (
    <>
      <Dialog open={open} onClose={onCancel} fullWidth maxWidth={maxWidth}>
        <DashboardDialogHeader>Assign Program</DashboardDialogHeader>
        {steps.length > 1 && (
          <>
            <Divider />
            <Stepper activeStep={activeStep}>
              {steps.map((step, i) => (
                <Step key={i}>
                  <StepButton
                    onClick={() => setActiveStep(i)}
                    completed={i <= activeStep ? step.completed : false}
                  >
                    {step.label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </>
        )}
        <DialogContent dividers style={{ height: '60vh' }}>
          {steps[activeStep]?.content}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelClick}>
            <FormattedMessage id="ProgramTrackCreateDialog.cancel" defaultMessage="Cancel" />
          </Button>
          {activeStep > 0 && (
            <Button variant="contained" onClick={onBackClick}>
              Back
            </Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={onNextClick}
              disabled={!currentStep.completed}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              disabled={!currentStep.completed}
              onClick={onSubmitClick}
            >
              Assign Program
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
});
