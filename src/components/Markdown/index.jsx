// @flow

import * as React from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

import MarkdownImage from './MarkdownImage';

const options = {
  remarkReactComponents: {
    img: MarkdownImage,
  },
};

const processor = unified()
  .use(parse)
  .use(remark2react, options);

type Props = {|
  markdown: string,
|};

export default function Markdown(props: Props) {
  const { markdown } = props;

  const virtualFile = React.useMemo(() => processor.processSync(markdown), [markdown]);

  return virtualFile.contents;
}
