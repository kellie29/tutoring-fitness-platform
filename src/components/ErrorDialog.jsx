// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  open: boolean,
  errorMessage: string | null,
  retry: (() => mixed) | null,
  onCancelClick: () => void,
};

export default function ErrorDialog(props: Props) {
  const { open, errorMessage, retry, onCancelClick } = props;

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Oops!</DialogTitle>
      <DialogContent>
        <DialogContentText gutterBottom>An error occured.</DialogContentText>
        {errorMessage && <DialogContentText gutterBottom>{errorMessage}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancelClick}>Cancel</Button>
        {retry && <Button onClick={retry}>Retry</Button>}
      </DialogActions>
    </Dialog>
  );
}
