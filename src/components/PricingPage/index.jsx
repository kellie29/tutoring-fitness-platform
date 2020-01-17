// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';
import appData from '../../data';

import SubscriptionPaper from './SubscriptionPaper';

export default function PricingPage() {
  return (
    <>
      <PageHelmet title="Pricing" />
      <PageFrame>
        <Grid
          container
          style={{ padding: 25 }}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography variant="h3" style={{ fontWeight: 'bold' }} gutterBottom>
              Pricing &amp; Sign up
            </Typography>
          </Grid>
          <Grid
            container
            style={{ marginTop: 50, height: 'fit-content' }}
            alignItems="flex-start"
            justify="center"
          >
            {appData.subscriptions.map((subscription) => (
              <SubscriptionPaper key={subscription.slug} subscription={subscription} />
            ))}
          </Grid>
        </Grid>
      </PageFrame>
    </>
  );
}
