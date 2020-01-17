// @flow

import * as React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useDialogContextValue } from '.';

type Props = {|
  children: React.Node,
|};

export default function DashboardDialogHeader(props: Props) {
  const { children } = props;

  const { onCancel } = useDialogContextValue();

  return (
    <DialogTitle
      disableTypography
      style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }}
    >
      <Typography variant="h5">{children}</Typography>
      <div style={{ flex: 1 }} />
      <IconButton size="small" aria-label="close" onClick={onCancel}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
}
