// @flow

import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

type Props = {
  open: boolean,
};

export default function LoadingDialog(props: Props) {
  const { open } = props;

  return (
    <Dialog open={open} fullWidth>
      <DialogContent>
        <DialogContentText gutterBottom>Loading...</DialogContentText>
        <LinearProgress />
      </DialogContent>
    </Dialog>
  );
}
