// @flow

import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import invariant from 'invariant';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { type MultiStepAction } from '../../helpers/programModuleData';
import { useEmulatorState } from '../MobileAppEmulator';

import { type DataEditorProps } from '.';
import ActionEditor from './ActionEditor';

type Props = {|
  ...DataEditorProps<MultiStepAction>,
  actionTypes?: $PropertyType<React.ElementConfig<typeof ActionEditor>, 'types'>,
|};

export default function MultiStepActionEditor(props: Props) {
  const { data, onChange, parentData, actionTypes } = props;

  const [selectedStepIndex, setSelectedStepIndex] = React.useState<number | null>(
    data && data.steps.length ? 0 : null,
  );

  const [, dispatcher] = useEmulatorState();

  React.useEffect(() => {
    dispatcher.setSelectedStep(selectedStepIndex || 0);
  }, [dispatcher, selectedStepIndex]);

  const onAddStepClick = React.useCallback(() => {
    invariant(data, 'Expected "data"');

    const newStep = {
      name: '',
      action: null,
    };

    const nextSteps = [...data.steps, newStep];

    onChange({
      ...data,
      steps: nextSteps,
    });
    setSelectedStepIndex(nextSteps.length - 1);
  }, [data, onChange]);

  const onRemoveStepClick = React.useCallback(
    (index) => {
      invariant(data, 'Expected "data"');

      const nextSteps = data.steps.filter((step, i) => i !== index);

      onChange({
        ...data,
        steps: nextSteps,
      });
      setSelectedStepIndex(nextSteps.length - 1);
    },
    [data, onChange],
  );

  const onNameChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      invariant(selectedStepIndex !== null, 'Expected "selectedStepIndex"');
      const selectedStep = data.steps[selectedStepIndex];
      const nextStep = {
        ...selectedStep,
        name: event.target.value,
      };
      const nextSteps = [...data.steps];
      nextSteps[selectedStepIndex] = nextStep;

      onChange({
        ...data,
        steps: nextSteps,
      });
    },
    [data, onChange, selectedStepIndex],
  );

  const onActionChange = React.useCallback(
    (nextAction) => {
      invariant(data, 'Expected "data"');
      invariant(selectedStepIndex !== null, 'Expected "selectedStepIndex"');

      const nextSteps = [...data.steps];
      nextSteps[selectedStepIndex] = {
        ...nextSteps[selectedStepIndex],
        action: nextAction,
      };

      onChange({
        ...data,
        steps: nextSteps,
      });
    },
    [data, onChange, selectedStepIndex],
  );

  const onStepPressed = React.useCallback(
    (value) => {
      if (selectedStepIndex === value) setSelectedStepIndex(null);
      else setSelectedStepIndex(value);
    },
    [selectedStepIndex],
  );

  const onDragEnd = React.useCallback(
    (result) => {
      invariant(data, 'Expected "data"');
      const nextSteps = [...data.steps];
      const { source, destination } = result;

      if (!destination) return;

      if (source.index === destination.index) return;

      const [removedStep] = nextSteps.splice(source.index, 1);
      nextSteps.splice(destination.index, 0, removedStep);

      onChange({
        ...data,
        steps: nextSteps,
      });
      setSelectedStepIndex(destination.index);
    },
    [data, onChange],
  );

  if (!data) {
    // onChange({
    //   action: actionModuleActionFactory.create('read', { content: '' }, {}),
    // });
    return null;
  }

  const hasMultipleSteps = data.steps.length > 1;

  return (
    <>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        {hasMultipleSteps && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable direction="horizontal" droppableId="droppableSteps">
              {(provided, snapshot) => (
                <ToggleButtonGroup
                  size="small"
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? 'rgba(0, 0, 0, 0.1)' : null,
                    ...{ display: 'flex', flexDirection: 'row' },
                  }}
                  {...provided.droppableProps}
                >
                  {data.steps.map((step, i) => (
                    <Draggable key={i} index={i} draggableId={String(i)}>
                      {(draggableProvided, draggableSnapshot) => {
                        const isSelected = i === selectedStepIndex;
                        return (
                          <div
                            ref={draggableProvided.innerRef}
                            onClick={() => onStepPressed(i)}
                            style={{
                              ...(draggableSnapshot.isDragging
                                ? { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                                : null),
                              ...{
                                display: 'flex',
                                flexDirection: 'row',
                              },
                              ...draggableProvided.draggableProps.style,
                            }}
                            {...draggableProvided.draggableProps}
                          >
                            <ToggleButton value={i} disableRipple selected={isSelected}>
                              <div
                                style={{
                                  display: 'flex',
                                  flex: 1,
                                  placeItems: 'center',
                                }}
                                {...draggableProvided.dragHandleProps}
                              >
                                <DragIndicatorIcon />
                              </div>
                              <KeyboardArrowRightIcon style={{ marginRight: 4 }} />
                              {step.name}
                              {draggableProvided.placeholder}
                            </ToggleButton>
                          </div>
                        );
                      }}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ToggleButtonGroup>
              )}
            </Droppable>
          </DragDropContext>
        )}
        <div style={{ flexGrow: 1 }} />
        <Button variant="contained" onClick={onAddStepClick}>
          Add Step
        </Button>
      </div>
      {selectedStepIndex !== null && (
        <>
          {hasMultipleSteps && (
            <div style={{ display: 'flex', marginBottom: 8 }}>
              <TextField
                label="Step Title"
                value={data.steps[selectedStepIndex].name || ''}
                onChange={onNameChange}
                style={{ flexGrow: 1 }}
              />
              <div style={{ flexGrow: 1 }} />
              <Button variant="contained" onClick={() => onRemoveStepClick(selectedStepIndex)}>
                Remove Step
              </Button>
            </div>
          )}
          <ActionEditor
            key={selectedStepIndex}
            types={actionTypes}
            data={data.steps[selectedStepIndex].action}
            onChange={onActionChange}
            parentData={parentData}
          />
        </>
      )}
    </>
  );
}
