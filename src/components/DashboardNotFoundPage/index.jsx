// @flow

import * as React from 'react';
import { Typography } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';

export default createDashboardPage<any>(function DashboardNotFoundPage() {
  return (
    <>
      <PageHelmet title="Not Found" />
      <DashboardPageBody variant="centered">
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
          Not Found
        </Typography>
        <Typography variant="body1">The page you were looking for was not found.</Typography>
      </DashboardPageBody>
    </>
  );
});
