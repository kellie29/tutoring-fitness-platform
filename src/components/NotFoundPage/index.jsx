// @flow

import * as React from 'react';
import { Typography } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';

export default function NotFoundPage() {
  return (
    <>
      <PageHelmet title="Not Found" />
      <PageFrame>
        <div
          style={{
            flex: 1,
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            placeItems: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
            Not Found
          </Typography>
          <Typography variant="body1">The page you were looking for was not found.</Typography>
        </div>
      </PageFrame>
    </>
  );
}
