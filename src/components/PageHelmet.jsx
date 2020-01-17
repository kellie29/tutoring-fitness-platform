// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import useFormatMessage from './useFormatMessage';

// type OpenGraphData = {
//   title?: string,
//   siteName?: string,
//   imageUrl?: string
// }

type Props = {
  title?: string | null,
  description?: string | null,
  keywords?: Array<string> | null,
  // openGraphData?: OpenGraphData,
};

export default function PageHelmet(props: Props) {
  const { title, description, keywords } = props;

  const s = useFormatMessage();

  return (
    <Helmet>
      {title ? (
        <title>
          {s('app.title')} - {title}
        </title>
      ) : (
        <title>{s('app.title')}</title>
      )}
      {description != null && description.length > 0 && (
        <meta name="description" content={description} />
      )}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
    </Helmet>
  );
}
