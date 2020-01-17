// @flow

import * as React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';

export default function ContactUsPage() {
  const matches = useMediaQuery('(max-width: 875px)');
  return (
    <>
      <PageHelmet title="Contact Us" />
      <PageFrame>
        <Grid
          container
          spacing={3}
          style={{
            margin: '0 auto',
            padding: `24px ${matches ? 20 : 200}px`,
            alignContent: 'center',
            maxWidth: '100%',
          }}
        >
          <Grid
            item
            xs={12}
            sm={9}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Typography variant="h4" color="primary" gutterBottom style={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography paragraph>
              We would love to hear from you. Please contact us either by email or chat.
            </Typography>
          </Grid>
          <Grid item xs={false} sm={3} />
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Typography variant="h5" color="primary" gutterBottom style={{ fontWeight: 'bold' }}>
              Email
            </Typography>
            <Typography paragraph>
              To contact us by email{' '}
              <Link href="mailto:contact@obschart.co.uk">send us an email</Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Typography variant="h5" color="primary" gutterBottom style={{ fontWeight: 'bold' }}>
              Chat
            </Typography>
            <Typography paragraph>
              To connect over chat{' '}
              <Link href="https://m.me/obschart1">on Facebook Messenger click here</Link>
            </Typography>
          </Grid>
        </Grid>
      </PageFrame>
    </>
  );
}
