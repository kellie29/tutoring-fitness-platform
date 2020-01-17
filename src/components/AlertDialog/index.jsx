// @flow
import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

type Props = {
  title?: string,
  message?: string,
  cancelText?: string,
  confirmText?: string,
  onClose: () => void,
  onConfirm: () => void,
  open: boolean,
};

export default function AlertDialog(props: Props) {
  const {
    open,
    title = 'Are you sure?',
    message = 'Please confirm your action.',
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onClose,
    onConfirm,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
