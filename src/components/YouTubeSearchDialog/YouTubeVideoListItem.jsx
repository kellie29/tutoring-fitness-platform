// @flow

import * as React from 'react';
import unescape from 'lodash/unescape';
import {
  Typography,
  // Button
} from '@material-ui/core';

import ListCard from '../ListCard';

type Thumbnail = $ReadOnly<{|
  height: number,
  url: string,
  width: number,
|}>;

type Result = $ReadOnly<{|
  etag: string,
  id: $ReadOnly<{| kind: string, videoId: string |}>,
  kind: string,
  snippet: $ReadOnly<{|
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishedAt: string,
    thumbnails: $ReadOnly<{|
      default: Thumbnail,
      high: Thumbnail,
      medium: Thumbnail,
    |}>,
    title: string,
  |}>,
|}>;

type Props = {
  result: Result,
  onChooseClick?: (result: any) => void,
};

export default function YouTubeVideoListItem(props: Props) {
  const { result, onChooseClick } = props;

  const thumbnail = result.snippet.thumbnails.default;

  return (
    <ListCard
      CardActionAreaProps={{ onClick: onChooseClick }}
      CardContentProps={{ style: { display: 'flex' } }}
    >
      <div style={{ marginRight: 16 }}>
        <img
          src={thumbnail.url}
          alt={result.snippet.title}
          intrinsicsize={`${thumbnail.width}x${thumbnail.height}`}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">{unescape(result.snippet.title)}</Typography>
        <Typography variant="body1">{unescape(result.snippet.description)}</Typography>
      </div>
      {/* {onChooseClick && <Button onClick={onChooseClick}>Choose</Button>} */}
    </ListCard>
  );
}
