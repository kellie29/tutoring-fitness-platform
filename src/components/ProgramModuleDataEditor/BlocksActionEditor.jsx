// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
// import Switch from '@material-ui/core/Switch';
import invariant from 'invariant';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Typography } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import {
  type BlocksAction,
  blocksActionBlockTypes,
  type BlocksActionBlockTypes,
} from '../../helpers/programModuleData';
import ButtonRack from '../ButtonRack';

import { type DataEditorProps } from '.';
import BlocksActionTextBlockEditor from './BlocksActionTextBlockEditor';
import BlocksActionYouTubeVideoBlockEditor from './BlocksActionYouTubeVideoBlockEditor';
import BlocksActionTextFieldBlockEditor from './BlocksActionTextFieldBlockEditor';
import BlocksActionImageFieldBlockEditor from './BlocksActionImageFieldBlockEditor';
import BlocksActionMultipleChoiceFieldBlockEditor from './BlocksActionMultipleChoiceFieldBlockEditor';
import BlocksActionDateTimeFieldBlockEditor from './BlocksActionDateTimeFieldBlockEditor';
import BlocksActionScaleFieldBlockEditor from './BlocksActionScaleFieldBlockEditor';
import BlocksActionNumberFieldBlockEditor from './BlocksActionNumberFieldBlockEditor';

const blockTypeToString: $ObjMap<BlocksActionBlockTypes, () => string> = {
  text: 'Text',
  youTubeVideo: 'YouTube Video',
  textField: 'Text',
  imageField: 'Image',
  multipleChoiceField: 'Multiple Choice',
  dateTimeField: 'Date and Time',
  scaleField: 'Scale',
  numberField: 'Number',
};

type BlockCategory = 'information' | 'question';
const blockTypeToCategory: $ObjMap<BlocksActionBlockTypes, () => BlockCategory> = {
  text: 'information',
  youTubeVideo: 'information',
  textField: 'question',
  imageField: 'question',
  multipleChoiceField: 'question',
  dateTimeField: 'question',
  scaleField: 'question',
  numberField: 'question',
};

export const blockTypeToDataEditor = {
  text: BlocksActionTextBlockEditor,
  youTubeVideo: BlocksActionYouTubeVideoBlockEditor,
  textField: BlocksActionTextFieldBlockEditor,
  imageField: BlocksActionImageFieldBlockEditor,
  multipleChoiceField: BlocksActionMultipleChoiceFieldBlockEditor,
  dateTimeField: BlocksActionDateTimeFieldBlockEditor,
  scaleField: BlocksActionScaleFieldBlockEditor,
  numberField: BlocksActionNumberFieldBlockEditor,
};

type Props = DataEditorProps<BlocksAction>;

export default function BlocksActionEditor(props: Props) {
  const { data, onChange } = props;

  const [anchorEl, setAnchorEl] = React.useState();
  const onAddBlockClick = React.useCallback(
    (blockType) => {
      setAnchorEl(null);
      invariant(data, 'Expected "data"');
      const { blocks } = data;

      let newBlock;
      switch (blockType) {
        case 'text': {
          newBlock = { type: 'text', content: '' };
          break;
        }
        case 'youTubeVideo': {
          newBlock = { type: 'youTubeVideo', videoId: null };
          break;
        }
        case 'textField': {
          newBlock = { type: 'textField', title: 'Enter some text', required: true };
          break;
        }
        case 'imageField': {
          newBlock = { type: 'imageField', title: 'Choose or take an image', required: true };
          break;
        }
        case 'multipleChoiceField': {
          newBlock = {
            type: 'multipleChoiceField',
            title: 'Choose one of the options',
            choices: [],
            required: true,
          };
          break;
        }
        case 'dateTimeField': {
          newBlock = { type: 'dateTimeField', title: 'Select a date and time', required: true };
          break;
        }
        case 'scaleField': {
          newBlock = {
            type: 'scaleField',
            title: 'Select a value',
            min: 0,
            max: 10,
            step: 1,
            required: true,
          };
          break;
        }
        case 'numberField': {
          newBlock = {
            type: 'numberField',
            title: 'Enter a number',
            min: Number.MIN_SAFE_INTEGER,
            max: Number.MAX_SAFE_INTEGER,
            step: 1,
            required: true,
          };
          break;
        }
        default: {
          throw new Error(`Invalid block type "${blockType}"`);
        }
      }

      const nextBlocks = [...blocks, newBlock];
      onChange({
        ...data,
        blocks: nextBlocks,
      });
    },
    [data, onChange],
  );

  const onFieldDeleteClick = React.useCallback(
    (index) => {
      invariant(data, 'Expected "data"');
      const { blocks } = data;

      const nextFields = blocks.filter((field, i) => index !== i);
      onChange({
        ...data,
        blocks: nextFields,
      });
    },
    [data, onChange],
  );

  const onFieldChange = React.useCallback(
    (index, nextField) => {
      invariant(data, 'Expected "data"');
      invariant(nextField, 'Expected "nextField"');
      const { blocks } = data;

      const nextFields = [...blocks];
      nextFields[index] = nextField;
      onChange({
        ...data,
        blocks: nextFields,
      });
    },
    [data, onChange],
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDragEnd = React.useCallback(
    (result) => {
      invariant(data, 'Expected "data"');
      const { blocks } = data;
      const { source, destination } = result;

      if (!destination) return;

      if (source.index === destination.index) return;

      const nextBlocks = [...blocks];
      const [removedBlock] = nextBlocks.splice(source.index, 1);
      nextBlocks.splice(destination.index, 0, removedBlock);

      onChange({
        ...data,
        blocks: nextBlocks,
      });
    },
    [data, onChange],
  );

  if (!data) {
    onChange({
      type: 'blocks',
      blocks: [],
    });
    return null;
  }

  // const showAddBlock = !data.blocks.length;
  const showAddBlock = true;

  return (
    <>
      <div>
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={snapshot.isDraggingOver ? { backgroundColor: 'rgba(0, 0, 0, 0.1)' } : null}
                  {...provided.droppableProps}
                >
                  {data.blocks.map((block, i) => {
                    const DataEditor = blockTypeToDataEditor[block.type];
                    return (
                      <Draggable key={i} draggableId={String(i)} index={i}>
                        {(draggableProvided, draggableSnapshot) => (
                          <div>
                            <Paper
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              style={{
                                ...(draggableSnapshot.isDragging
                                  ? {
                                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    }
                                  : null),
                                display: 'flex',
                                // placeItems: 'center',
                                marginBottom: 16,
                                ...draggableProvided.draggableProps.style,
                              }}
                            >
                              <div
                                {...draggableProvided.dragHandleProps}
                                style={{
                                  display: 'flex',
                                  placeItems: 'center',
                                  paddingRight: 8,
                                  borderRight: '1px solid #CCC',
                                }}
                              >
                                <DragIndicatorIcon />
                              </div>
                              <div
                                style={{
                                  flex: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  padding: 8,
                                }}
                              >
                                {/* $FlowFixMe */}
                                <DataEditor
                                  data={block}
                                  onChange={(nextField) => onFieldChange(i, nextField)}
                                />
                                <Divider
                                  style={{
                                    margin: 8,
                                  }}
                                />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <div style={{ flexGrow: 1 }} />
                                  <IconButton
                                    aria-label="Delete"
                                    onClick={() => {
                                      onFieldDeleteClick(i);
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </div>
                              </div>
                            </Paper>
                            {draggableProvided.placeholder}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {showAddBlock ? (
            <>
              <Paper
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 16,
                  padding: 12,
                  placeContent: 'center',
                  placeItems: 'center',
                }}
              >
                <Typography variant="h6">Add an information block</Typography>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 16,
                    padding: 12,
                    placeContent: 'center',
                    placeItems: 'center',
                  }}
                >
                  <ButtonRack style={{ placeItems: 'center', placeContent: 'center' }}>
                    {blocksActionBlockTypes
                      .filter((blockType) => blockTypeToCategory[blockType] === 'information')
                      .map((blockType) => (
                        <Button
                          key={blockType}
                          variant="contained"
                          onClick={() => onAddBlockClick(blockType)}
                        >
                          {blockTypeToString[blockType]}
                        </Button>
                      ))}
                  </ButtonRack>
                </div>
                <Typography variant="h6">Add a question block</Typography>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 16,
                    padding: 12,
                    placeContent: 'center',
                    placeItems: 'center',
                  }}
                >
                  <ButtonRack style={{ placeItems: 'center', placeContent: 'center' }}>
                    {blocksActionBlockTypes
                      .filter((blockType) => blockTypeToCategory[blockType] === 'question')
                      .map((blockType) => (
                        <Button
                          key={blockType}
                          variant="contained"
                          onClick={() => onAddBlockClick(blockType)}
                        >
                          {blockTypeToString[blockType]}
                        </Button>
                      ))}
                  </ButtonRack>
                </div>
              </Paper>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                aria-owns={anchorEl ? 'block-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                Add Block
              </Button>
              <Menu
                id="block-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {blocksActionBlockTypes.map((blockType) => (
                  <MenuItem key={blockType} onClick={() => onAddBlockClick(blockType)}>
                    {blockTypeToString[blockType]}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </>
      </div>
    </>
  );
}
