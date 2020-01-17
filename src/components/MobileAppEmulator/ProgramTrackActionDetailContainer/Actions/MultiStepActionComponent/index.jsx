// @flow

import * as React from 'react';
import { View } from 'react-native';

import BlocksActionComponent from '../BlocksActionComponent';
import FillFormActionComponent from '../FillFormActionComponent';
import ReadActionComponent from '../ReadActionComponent';
import ReadBlocksActionComponent from '../ReadBlocksActionComponent';
import ReferenceActionComponent from '../ReferenceActionComponent';
import { contentWidth } from '../../../IphoneFrame';
import useEmulatorState from '../../../useEmulatorState';

import StepController from './StepController';

type Props = {
  action: any,
  response?: any,
};

const width = contentWidth - 32;

export default function MultiStepActionComponent(props: Props) {
  const { action: multiStepAction, response: actionResponse } = props;

  const pagedListRef = React.useRef(null);

  const [emulatorState, dispatcher] = useEmulatorState();

  const { steps: data } = multiStepAction;

  const renderItem = ({ item, index }) => {
    const { action } = item;
    let component;
    if (action) {
      const componentProps = {
        style: { width, height: '100%' },
        action,
        key: index,
        pointerEvents: 'box-only',
      };

      if (actionResponse) {
        // $FlowFixMe
        componentProps.response = actionResponse.steps[index];
      }

      switch (action.type) {
        case 'blocks': {
          component = <BlocksActionComponent {...componentProps} />;
          break;
        }
        case 'read': {
          component = <ReadActionComponent {...componentProps} />;
          break;
        }
        case 'readBlocks': {
          component = <ReadBlocksActionComponent {...componentProps} />;
          break;
        }
        case 'fillForm': {
          component = <FillFormActionComponent {...componentProps} />;
          break;
        }
        case 'reference': {
          component = <ReferenceActionComponent {...componentProps} />;
          break;
        }
        default: {
          throw new Error(`Invalid action type "${action.type}"`);
        }
      }
    }

    return component;
  };

  const scrollToIndex = (index: number) => {
    if (pagedListRef.current) {
      pagedListRef.current.scrollLeft = Math.floor(index * width);
    }
  };

  React.useEffect(() => {
    scrollToIndex(emulatorState.selectedStep);
  }, [emulatorState, data]);

  const onNextPressed = () => {
    const index = Math.min(emulatorState.selectedStep + 1, data.length - 1);
    dispatcher.setSelectedStep(index);
  };

  const onPreviousPressed = () => {
    const index = Math.max(emulatorState.selectedStep - 1, 0);
    dispatcher.setSelectedStep(index);
  };

  const totalSteps = data.length;

  return (
    <View style={{ flex: 1 }}>
      <div
        style={{
          scrollSnapType: 'x mandatory',
          overflowY: 'hidden',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          display: 'flex',
          height: '100%',
        }}
        // $FlowFixMe
        ref={pagedListRef}
      >
        {data.map((item, index) => (
          <section key={index}>{renderItem({ item, index })}</section>
        ))}
      </div>
      <StepController
        pointerEvents="auto"
        currentStep={emulatorState.selectedStep + 1}
        totalSteps={totalSteps}
        onNextPressed={onNextPressed}
        onPreviousPressed={onPreviousPressed}
      />
    </View>
  );
}
