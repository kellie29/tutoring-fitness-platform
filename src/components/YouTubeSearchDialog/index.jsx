// @flow

import * as React from 'react';
// import { type ContextRouter } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

import YouTubeSearchView from './YouTubeSearchView';

type Props = {
  // ...ContextRouter,
  open: boolean,
  onClose: (results: any | null) => void,
};

export default function YouTubeSearchDialog(props: Props) {
  const { open, onClose } = props;

  const onChooseClick = React.useCallback(
    (result) => {
      onClose(result);
    },
    [onClose],
  );

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth={false}>
        <DialogTitle disableTypography style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Choose YouTube Video</Typography>
          {/* <div style={{ flexGrow: 1 }} />
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton> */}
        </DialogTitle>
        <YouTubeSearchView onChooseClick={onChooseClick} />
        {/* <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
          <YouTubeSearchView onChooseClick={onChooseClick} />
        </DialogContent> */}
      </Dialog>
    </>
  );
}
