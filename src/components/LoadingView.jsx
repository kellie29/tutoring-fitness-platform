// @flow

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingView() {
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
      <CircularProgress />
    </div>
  );
}
