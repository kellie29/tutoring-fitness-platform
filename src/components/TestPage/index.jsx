// @flow

import * as React from 'react';
import { Button } from '@material-ui/core';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import ListPaper from '../ListPaper';
import YouTubeVideoListItem from '../YouTubeSearchDialog/YouTubeVideoListItem';
import YouTubeSearchDialog from '../YouTubeSearchDialog';
import YouTubeVideoPlayer from '../YouTubeVideoPlayer';

export default createDashboardPage<any>(function TestPage() {
  // const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(true);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const onChooseClick = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const onDialogClose = React.useCallback((result) => {
    setSelectedVideo(result);
    setIsDialogOpen(false);
  }, []);

  return (
    <>
      <PageHelmet title="Home" />
      <YouTubeSearchDialog open={isDialogOpen} onClose={onDialogClose} />
      <DashboardPageBody>
        {selectedVideo ? (
          <>
            <YouTubeVideoPlayer videoId={selectedVideo.id.videoId} />
            <YouTubeVideoListItem result={selectedVideo} />
            <Button variant="contained" onClick={onChooseClick}>
              Change Video
            </Button>
          </>
        ) : (
          <ListPaper>
            <em>No video selected</em>
            <Button variant="contained" onClick={onChooseClick}>
              Choose Video
            </Button>
          </ListPaper>
        )}
        {/* <YouTubeSearchView /> */}
      </DashboardPageBody>
    </>
  );
});
