// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';
import { dashboardEnabled } from '../../config';

import analyse from './analyse.png';
import appPreview from './appPreviewFitness.png';
import automate from './automate.png';
import connect from './connect.png';
import forms from './forms.png';
import improve from './improve.png';
import learn from './learn.png';
import plans from './plans.png';
import profile from './profile.png';
import security from './security.png';
import statistics from './statistics.png';
import update from './update.png';

export default function LandingPage() {
  const matches = useMediaQuery('(max-width: 959px)');
  const features = [
    {
      title: 'Make great plans',
      description: 'text, image & video input',
      icon: plans,
    },
    {
      title: 'Track progress over time',
      description: 'text, image & video input.  smart device integrations (coming soon)',
      icon: statistics,
    },
    {
      title: 'Update',
      description: 'stay informed about individuals and groups',
      icon: update,
    },
    {
      title: 'Connect',
      description: 'cloud communicate with users',
      icon: connect,
    },
    {
      title: 'Learn',
      description: 'data analytics tools',
      icon: learn,
    },
    {
      title: 'Automate',
      description: 'Remove repetitive tasks and manual work',
      icon: automate,
    },
    {
      title: 'Security covered',
      description: 'Secure servers',
      icon: security,
    },
    {
      title: 'Profile',
      description: 'Edit profile to suit your profession',
      icon: profile,
    },
  ];

  return (
    <>
      <PageHelmet />
      <PageFrame>
        <Grid
          container
          spacing={3}
          style={{
            margin: '0 auto',
            padding: `24px ${matches ? 20 : 0}px`,
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
              marginBottom: 20,
              position: 'relative',
              minHeight: 500,
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                Grow your fitness business{' '}
                <Typography variant="inherit" color="primary">
                  with online programming
                </Typography>
              </Typography>
              <Typography paragraph>
                Provide an amazing online experience for clients. Custom brand your mobile-app based
                program, integrate video and instructions and collect the stats. Start with a FREE
                initial plan for up to 5 clients.{' '}
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
                  Start for free
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
            <Grid item xs={12} md={3}>
              <img src={appPreview} alt="App Preview" />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginBottom: 20,
              position: 'relative',
              minHeight: 500,
            }}
          >
            <Grid item md={3} xs={12} container justify="center" style={{ order: matches ? 2 : 0 }}>
              {!matches ? (
                <img
                  style={{ height: '100%', objectFit: 'contain', position: 'absolute', top: 0 }}
                  alt="Make Programs"
                  src={improve}
                />
              ) : (
                <img
                  style={{ height: 500, objectFit: 'contain' }}
                  alt="Make Programs"
                  src={improve}
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: !matches ? 60 : 0,
              }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                Create{' '}
                <Typography variant="inherit" color="primary">
                  Great Plans
                </Typography>
              </Typography>
              <Typography paragraph>
                With ObsChart you can easily create plans for common user types. Send notification
                reminders to your users, so they get the right information at the right time.
                Improve understanding, adherence and make appointments more efficient.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginBottom: 20,
              position: 'relative',
              minHeight: 500,
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginRight: !matches ? 60 : 0,
              }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                Understand User{' '}
                <Typography variant="inherit" color="primary">
                  Journeys
                </Typography>
              </Typography>
              <Typography paragraph>
                Create custom forms for patients, prompt photo &amp; video upload and much more.
                With ObsChart you can collect the information you need to monitor results. With
                advanced observations, you can understand how your users respond to your plans.
              </Typography>
            </Grid>
            <Grid item md={3} xs={12} container justify="center" style={{ order: matches ? 2 : 0 }}>
              {!matches ? (
                <img
                  style={{ height: '100%', objectFit: 'contain', position: 'absolute', top: 0 }}
                  alt="Collect data"
                  src={forms}
                />
              ) : (
                <img style={{ height: 500, objectFit: 'contain' }} alt="Collect data" src={forms} />
              )}
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginBottom: 20,
              position: 'relative',
              minHeight: 500,
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                order: matches ? 2 : 0,
              }}
            >
              <img src={analyse} alt="Analyse" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                Analyze Results to{' '}
                <Typography variant="inherit" color="primary">
                  Improve Outcomes
                </Typography>
              </Typography>
              <Typography paragraph>
                Advanced analytics and charting helps you to gain insights into the feedback of
                individuals and groups. See analytics and trends so you can learn what works and
                give more accurate help and advice. You can use analytics on any scale, from
                population research to helping individuals.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginBottom: 20,
              position: 'relative',
              minHeight: 500,
            }}
          >
            <Grid container justify="center">
              <Typography gutterBottom variant="h4">
                Features
              </Typography>
            </Grid>
            <Grid
              container
              justify="space-evenly"
              alignItems="baseline"
              style={{ maxWidth: 1200, margin: '0 auto' }}
            >
              {features.map((feature) => (
                <Grid
                  container
                  justify="center"
                  direction="column"
                  style={{ maxWidth: 300, padding: 30 }}
                  key={feature.title}
                >
                  <img
                    style={{ objectFit: 'contain', margin: 10, height: 50 }}
                    src={feature.icon}
                    alt={feature.title}
                  />

                  <Typography align="center" variant="h6">
                    {feature.title}
                  </Typography>
                  <Typography align="center">{feature.description}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </PageFrame>
    </>
  );
}
