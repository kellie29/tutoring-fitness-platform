// @flow

import * as React from 'react';
import ReactRte from 'react-rte';

export const { createValueFromString, createEmptyValue } = ReactRte;

// https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
const INLINE_STYLE_BUTTONS = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Strikethrough', style: 'STRIKETHROUGH' },
  // { label: 'Monospace', style: 'CODE' },
  // { label: 'Underline', style: 'UNDERLINE' },
];

// https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
const BLOCK_TYPE_DROPDOWN = [
  { label: 'Normal', style: 'unstyled' },
  { label: 'Heading Large', style: 'header-one' },
  { label: 'Heading Medium', style: 'header-three' },
  { label: 'Heading Small', style: 'header-five' },
  // { label: 'Code Block', style: 'code-block' },
];
const BLOCK_TYPE_BUTTONS = [
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  // { label: 'Blockquote', style: 'blockquote' },
];

const toolbarConfig = {
  display: [
    'INLINE_STYLE_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
    'LINK_BUTTONS',
    'IMAGE_BUTTON',
    'BLOCK_TYPE_DROPDOWN',
    'HISTORY_BUTTONS',
  ],
  INLINE_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
};

type Props = {|
  value: $PropertyType<React.ElementConfig<typeof ReactRte>, 'value'>,
  onChange: $PropertyType<React.ElementConfig<typeof ReactRte>, 'onChange'>,
|};

export default function RichTextEditor(props: Props) {
  const { value, onChange } = props;

  return <ReactRte toolbarConfig={toolbarConfig} value={value} onChange={onChange} />;
}
