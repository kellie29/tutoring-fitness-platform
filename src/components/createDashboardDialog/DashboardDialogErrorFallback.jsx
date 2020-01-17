// @flow

import * as React from 'react';
import {
  Button,
  DialogActions,
  Typography,
  DialogContentText,
  DialogContent,
  Dialog,
} from '@material-ui/core';

import DashboardDialogHeader from './DashboardDialogHeader';
import { type DashboardDialogProps } from '.';

type Props = {
  error: any,
  retry: () => void,
  dialogProps: DashboardDialogProps<any, any>,
};

export default function DashboardDialogErrorFallback({ error, retry, dialogProps }: Props) {
  return (
    <Dialog open={dialogProps.open} onClose={dialogProps.onCancel} fullWidth maxWidth="sm">
      <DashboardDialogHeader>An Error Occured!</DashboardDialogHeader>
      <DialogContent>
        <DialogContentText>
          <Typography variant="body1" gutterBottom>
            {error.message}
          </Typography>
          <div style={{ height: 16 }} />
          <Typography variant="body2" gutterBottom>
            Try refreshing the page if retrying doesn&apos;t work.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogProps.onCancel}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={retry}>
          Retry
        </Button>
      </DialogActions>
    </Dialog>
  );
}
