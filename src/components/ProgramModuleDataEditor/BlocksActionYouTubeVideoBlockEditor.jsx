// @flow

import * as React from 'react';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Button } from '@material-ui/core';

import { type BlocksActionYouTubeVideoBlock } from '../../helpers/programModuleData';
import YouTubeSearchDialog from '../YouTubeSearchDialog';
import YouTubeVideoPlayer from '../YouTubeVideoPlayer';

import BlocksActionBlockEditor from './BlocksActionBlockEditor';

type Props = {
  data: BlocksActionYouTubeVideoBlock | null,
  onChange: (data: BlocksActionYouTubeVideoBlock | null) => void,
};

export default function BlocksActionYouTubeVideoBlockEditor(props: Props) {
  const { data, onChange } = props;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const onChooseClick = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const onDialogClose = React.useCallback(
    (result) => {
      if (result?.id) {
        onChange({
          ...data,
          // $FlowFixMe
          videoId: result?.id.videoId,
        });
      }
      setIsDialogOpen(false);
    },
    [data, onChange],
  );

  if (!data) {
    onChange({ type: 'youTubeVideo', videoId: '' });
    return null;
  }

  return (
    <>
      <YouTubeSearchDialog open={isDialogOpen} onClose={onDialogClose} />
      <BlocksActionBlockEditor icon={<VideoLibraryIcon />}>
        <div style={{ display: 'flex', placeContent: 'center' }}>
          {data.videoId ? (
            <YouTubeVideoPlayer videoId={data.videoId} />
          ) : (
            <em>No video selected.</em>
          )}
        </div>
        <div style={{ display: 'flex', placeContent: 'flex-end' }}>
          <Button variant="contained" onClick={onChooseClick}>
            Choose a Video
          </Button>
        </div>
      </BlocksActionBlockEditor>
    </>
  );
}
