// @flow

import * as React from 'react';
import { Typography, Button } from '@material-ui/core';

type Props = {
  error: any,
  retry: () => void,
};

export default function ErrorView({ error, retry }: Props) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <Typography variant="h5" gutterBottom>
        An Error Occured!
      </Typography>
      <Typography variant="body1" gutterBottom>
        {error.message}
      </Typography>
      <div style={{ height: 16 }} />
      <Typography variant="body2" gutterBottom>
        Try refreshing the page if retrying doesn&apos;t work.
      </Typography>
      <div style={{ height: 16 }} />
      <Button variant="contained" size="small" onClick={retry}>
        Retry
      </Button>
    </div>
  );
}
