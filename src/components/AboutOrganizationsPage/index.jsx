// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';
import { dashboardEnabled } from '../../config';

import doctor from './doctor.png';
import organisationApp from './organisationApp.png';
import people from './people.png';
import phone from './phone.png';
import search from './search.png';

export default function AboutOrganizationsPage() {
  const matches = useMediaQuery('(max-width: 959px)');

  return (
    <>
      <PageHelmet title="Organizations" />
      <PageFrame>
        <Grid
          container
          spacing={3}
          style={{
            margin: '0 auto',
            padding: `24px 0px`,
            alignContent: 'center',
            maxWidth: '100%',
          }}
        >
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              padding: 20,
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                Connect with{' '}
                <Typography variant="inherit" color="primary">
                  the people you care about.
                </Typography>
              </Typography>
              <Typography paragraph>
                From a central touch-point for monitoring your fitness clients to oversight of
                beautiful electronic Patient Reported Outcome collection, ObsChart organizations is
                built for you.
              </Typography>
              <div style={{ width: 'fit-content', textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={dashboardEnabled ? '/dashboard/signup' : '/contact-us'}
                  style={{
                    borderRadius: '40px',
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 600,
                    boxShadow: 'unset',
                    letterSpacing: 2,
                    marginBottom: 10,
                  }}
                >
                  Start For Free
                </Button>
                <br />
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    fontWeight: 600,
                    fontSize: 8,
                    letterSpacing: 1,
                    marginBottom: 10,
                    color: '#a9a9a9',
                    textTransform: 'uppercase',
                  }}
                >
                  No credit card required
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3} container alignItems="center" justify="center">
              <img
                src={organisationApp}
                alt="App Preview"
                style={{ maxWidth: '100%', objectFit: 'contain' }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              background: '#1B253D',
              padding: 40,
            }}
          >
            <Grid item container alignItems="center" justify="center">
              <Typography variant="h5" gutterBottom style={{ color: '#fff' }}>
                <b>
                  Create an organisation - for organizations of any size and academic institutions
                </b>
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="space-evenly"
              style={{ maxWidth: 475, padding: 10 }}
            >
              <img style={{ margin: 10 }} alt="icon" src={people} />
              <img style={{ margin: 10 }} alt="icon" src={doctor} />
              <img style={{ margin: 10 }} alt="icon" src={phone} />
              <img style={{ margin: 10 }} alt="icon" src={search} />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={3}
            style={{
              maxHeight: 'fit-content',
              padding: 20,
            }}
          >
            <Grid
              md={6}
              xs={12}
              item
              container
              style={{ height: matches ? 'fit-content' : '100%' }}
            >
              <Paper
                style={{
                  padding: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  <b>For providers &amp; insurers</b>
                </Typography>
                <Typography paragraph color="primary">
                  <b>
                    In an organisation, you can spread the best digital health practices quickly and
                    easily. Use your organisation to invite clinicians, create &amp; collect your
                    best digital health solutions in one place, manage subscription plans and view
                    aggregate analytics across the organisation.{' '}
                  </b>
                </Typography>
                <Typography paragraph>
                  Using ObsChart, your best professionals can create digital health solutions within
                  your organisation. These can be securely shared with other professionals, so best
                  practices can be spread effectively. To setup an organisation, create an account
                  and then click “Setup Organisation”. You can then invite chosen healthcare
                  professionals to join or start creating digital health solutions. Share your
                  solutions across organisations.
                </Typography>
                <div style={{ width: 'fit-content' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/contact-us"
                    style={{
                      borderRadius: '40px',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 600,
                      boxShadow: 'unset',
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    Get Started
                  </Button>
                  <br />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{
                      fontWeight: 600,
                      fontSize: 8,
                      letterSpacing: 1,
                      marginBottom: 10,
                      color: '#a9a9a9',
                      textTransform: 'uppercase',
                    }}
                  >
                    For any questions – organisations@obschart.com
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid
              md={6}
              xs={12}
              item
              container
              style={{ height: matches ? 'fit-content' : '100%' }}
            >
              <Paper
                style={{
                  padding: 40,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  <b>For pharmaceutical, medical devices &amp; research organisations</b>
                </Typography>
                <Typography paragraph color="primary">
                  <b>
                    Create beautiful electronic Patient Reported Outcome systems. From e-consent to
                    fully customisable forms, ObsChart is built to help you create secure digital
                    health solutions and distribute them efficiently to your partners. Your
                    solutions can gain insights into the use of your products while improving
                    overall care and improving outcomes.
                  </b>
                </Typography>
                <Typography paragraph>
                  Using ObsChart, you can collect patient derived information in a beautiful form.
                  You can create custom forms, request e-consent and gather granular data to best
                  understand your patients. Your plans can be shared with other organisations, so
                  your clinical trial can run efficiently. To setup an organisation, create an
                  account and then click “Setup Organisation”. You can then invite chosen healthcare
                  professionals to join or start creating digital health solutions. Share your
                  solutions across organisations.
                </Typography>
                <div style={{ width: 'fit-content' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/contact-us"
                    style={{
                      borderRadius: '40px',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 600,
                      boxShadow: 'unset',
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    Get Started
                  </Button>
                  <br />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{
                      fontWeight: 600,
                      fontSize: 8,
                      letterSpacing: 1,
                      marginBottom: 10,
                      color: '#a9a9a9',
                      textTransform: 'uppercase',
                    }}
                  >
                    For any questions – organisations@obschart.com
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </PageFrame>
    </>
  );
}
