// @flow

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '@material-ui/core/Button';

import useEmulatorState from '../../../useEmulatorState';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 64,
  },
  buttonContainer: {
    width: 84,
    height: 36,
  },
});

type Props = {
  currentStep: number,
  totalSteps: number,
  onNextPressed: () => void,
  onPreviousPressed: () => void,
};

export default function StepController(props: Props) {
  const { currentStep, totalSteps, onNextPressed, onPreviousPressed, ...restProps } = props;

  const [emulatorState] = useEmulatorState();

  const { showSaveButton } = emulatorState;

  const isLastStep = currentStep === totalSteps;
  const hasMultipleSteps = totalSteps > 1;

  const showPrevButton = currentStep !== 1;
  const showNextButton = !isLastStep || showSaveButton;

  const prevButtonOpacity = showPrevButton ? 1 : 0;
  const nextButtonOpacity = showNextButton ? 1 : 0;

  return (
    <View
      style={styles.container}
      // $FlowFixMe
      {...restProps}
    >
      <View style={[styles.buttonContainer, { opacity: prevButtonOpacity }]}>
        <Button
          variant="contained"
          color="primary"
          onClick={onPreviousPressed}
          disabled={!showPrevButton}
        >
          Previous
        </Button>
      </View>
      <Text style={styles.stepInfoText}>
        {hasMultipleSteps ? `Step ${currentStep} of ${totalSteps}` : ''}
      </Text>
      <View style={[styles.buttonContainer, { opacity: nextButtonOpacity }]}>
        <Button
          variant="contained"
          color="primary"
          onClick={onNextPressed}
          disabled={!showNextButton}
        >
          {isLastStep ? 'Save' : 'Next'}
        </Button>
      </View>
    </View>
  );
}
