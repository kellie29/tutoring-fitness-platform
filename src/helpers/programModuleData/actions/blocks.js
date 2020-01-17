// @flow

export type BlocksActionTextBlock = {|
  type: 'text',
  content: string,
|};
export type BlocksActionYouTubeVideoBlock = {|
  type: 'youTubeVideo',
  videoId: string | null,
|};
export type BlocksActionFieldBlockBase<TType: string> = $ReadOnly<{|
  type: TType,
  title: string,
  required: boolean,
|}>;
export type BlocksActionTextFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'textField'>,
|}>;
export type BlocksActionImageFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'imageField'>,
|}>;
export type BlocksActionDateTimeFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'dateTimeField'>,
|}>;
export type BlocksActionScaleFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'scaleField'>,
  min: number,
  max: number,
  step: number,
|}>;
export type BlocksActionMultipleChoiceFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'multipleChoiceField'>,
  choices: Array<{| title: string |}>,
|}>;
export type BlocksActionNumberFieldBlock = $ReadOnly<{|
  ...BlocksActionFieldBlockBase<'numberField'>,
  min: number,
  max: number,
  step: number,
|}>;

export type BlocksActionBlockTypes = {|
  text: BlocksActionTextBlock,
  youTubeVideo: BlocksActionYouTubeVideoBlock,
  textField: BlocksActionTextFieldBlock,
  imageField: BlocksActionImageFieldBlock,
  multipleChoiceField: BlocksActionMultipleChoiceFieldBlock,
  dateTimeField: BlocksActionDateTimeFieldBlock,
  scaleField: BlocksActionScaleFieldBlock,
  numberField: BlocksActionNumberFieldBlock,
|};
export type BlocksActionBlock = $Values<BlocksActionBlockTypes>;
export type BlocksActionBlockType = $PropertyType<BlocksActionBlock, 'type'>;
export const blocksActionBlockTypes: Array<BlocksActionBlockType> = [
  'text',
  'youTubeVideo',
  'textField',
  'imageField',
  'multipleChoiceField',
  'dateTimeField',
  'scaleField',
  'numberField',
];
export const blocksActionFieldBlockTypes: Array<BlocksActionBlockType> = [
  'textField',
  'imageField',
  'multipleChoiceField',
  'dateTimeField',
  'scaleField',
  'numberField',
];

export type BlocksAction = {|
  type: 'blocks',
  blocks: Array<BlocksActionBlock>,
|};
