// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageHelmet from '../PageHelmet';
import PageFrame from '../PageFrame';

import appleWatch from './appleWatch.png';
import asthmaSymptoms from './asthmaSymptoms.png';
import creator from './creator.png';
import map from './map.png';
import ourTeam from './ourTeam.png';

export default function AboutUsPage() {
  const matches = useMediaQuery('(max-width: 959px)');

  return (
    <>
      <PageHelmet title="About Us" />
      <PageFrame>
        <Grid
          container
          spacing={3}
          style={{
            margin: '0 auto',
            padding: `24px ${matches ? 20 : 0}px`,
            paddingBottom: 0,
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
            <Grid item md={3} xs={12} container justify="center" style={{ order: matches ? 2 : 0 }}>
              {!matches ? (
                <img
                  style={{ height: 700, objectFit: 'contain', position: 'absolute', top: 5 }}
                  alt="Dr. John Snow"
                  src={map}
                />
              ) : (
                <img style={{ height: 600, objectFit: 'contain' }} alt="Dr. John Snow" src={map} />
              )}
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              container
              direction="column"
              style={{ maxHeight: 'min-content', zIndex: 99, marginLeft: !matches ? 60 : 0 }}
            >
              <Typography variant="h3" gutterBottom>
                <b>About Us</b>
              </Typography>
              <Typography color="primary" gutterBottom>
                <b>
                  In 1854 Dr John Snow used a map to plot patient episodes in a major outbreak of
                  cholera in Soho, London.
                </b>
              </Typography>
              <Typography gutterBottom>
                He found that nearly all cases took place within a short distance of one particular
                water pump on Broad Street. On the 8th of September he had the handle of that water
                pump removed. Almost immediately,the outbreak stopped.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              background: matches ? 'inherit' : '#1B253D',
              position: 'relative',
              height: matches ? 'fit-content' : 400,
            }}
          >
            <Grid
              item
              md={3}
              xs={12}
              container
              style={{ zIndex: 999, marginRight: !matches ? 60 : 0 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{ color: matches ? 'inherit' : 'white' }}
              >
                <b>Our Belief</b>
              </Typography>
              <Typography style={{ color: matches ? 'inherit' : 'white' }}>
                We believe that health and wellness professionals can create a better future by
                observing their users. Tools used for this purpose have not advanced, while
                potential for observation has exploded with the adoption of mobile devices and
                wearables.
              </Typography>
            </Grid>
            {!matches && (
              <Grid item md={3} xs={12} container justify="center">
                <img
                  style={{ height: 600, objectFit: 'contain', position: 'absolute', top: 0 }}
                  alt="Apple Watch"
                  src={appleWatch}
                />
              </Grid>
            )}
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginTop: 50,
            }}
          >
            <Grid item md={6} xs={12} container justify="center">
              <img
                style={{ height: '100%', width: '100%', objectFit: 'contain', padding: '0 40px' }}
                alt="Creator"
                src={creator}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              container
              direction="column"
              style={{ maxHeight: 'min-content', zIndex: 99 }}
            >
              <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
                We’re for the{' '}
                <Typography variant="inherit" color="primary">
                  innovators &amp; creators.
                </Typography>
              </Typography>
              <Typography paragraph>
                ObsChart puts the most powerful digital monitoring solutions into the hands of
                health and wellness professionals. Unlike other solutions, we focus on enabling
                professionals, both individually and within in organisations, to create observation
                plans themselves. By doing this, we think that the speed of innovation will increase
                and that they will create the most extraordinary digital health solutions for users.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
            }}
          >
            <Grid
              item
              md={3}
              xs={12}
              container
              direction="column"
              style={{ maxHeight: 'min-content', zIndex: 99, order: matches ? 2 : 0 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{ display: 'flex', fontWeight: 'bold', flexDirection: 'row' }}
              >
                Obs
                <Typography variant="inherit" color="primary">
                  Charts
                </Typography>
              </Typography>
              <Typography paragraph>
                An observation chart is a chart used in hospital to monitor a patient over time.
                They have become an important adjunct to hospital care to keep track of changes in
                health and disease. Using ObsChart, professionals can observe progress over time in
                their users. Our aim is to bring the best software tools to health and wellness
                professionals.
              </Typography>
            </Grid>
            <Grid item md={6} xs={12} container justify="center">
              <img
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  marginRight: matches ? 'unset' : '-75%',
                  height: matches ? 400 : 'unset',
                }}
                alt="Creator"
                src={asthmaSymptoms}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              maxHeight: 'fit-content',
              marginTop: 50,
            }}
          >
            <Grid item md={6} xs={12} container justify="center">
              <img
                style={{ height: '100%', width: '100%', objectFit: 'contain', padding: '0 40px' }}
                alt="Creator"
                src={ourTeam}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              container
              direction="column"
              style={{ maxHeight: 'min-content', zIndex: 99 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  display: 'flex',
                  fontWeight: 'bold',
                  flexDirection: 'row',
                }}
              >
                Our{' '}
                <Typography variant="inherit" color="primary" style={{ marginLeft: 10 }}>
                  Team
                </Typography>
              </Typography>
              <Typography paragraph>
                We have a highly technical team including software developers and clinicians. The
                team constantly strive to put the best software tools into the hands of healthcare
                professionals. We’re obsessed by patient privacy and data security and will never
                compromise on patient data privacy. We’re fortunate to be backed by one of the
                leading Biomedical Research Centres in the UK.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            style={{ marginTop: 50, background: '#FCFCFC', padding: '55px 0px' }}
          >
            <Typography variant="h3">
              <b>Discover More?</b>
            </Typography>
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
                margin: 20,
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </PageFrame>
    </>
  );
}
