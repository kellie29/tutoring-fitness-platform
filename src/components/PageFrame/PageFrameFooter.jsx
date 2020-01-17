// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid, Hidden, makeStyles, Link as MuiLink } from '@material-ui/core';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#1B253D',
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  bigText: {
    marginBottom: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontWeight: 'bold',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      textAlign: 'center',
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    fontWeight: 'bold',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
    },
  },
}));

export default function PageFrameFooter() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignItems="center">
      <Hidden xsDown>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className={classes.bigText}>
            Build your
            <br />
            <Typography variant="inherit" color="primary" style={{ fontWeight: 'bold' }}>
              digital health solution
            </Typography>
          </Typography>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        <div className={classes.buttonContainer}>
          <Button
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
            component={Link}
            to="/about-us"
          >
            About Us
          </Button>
          <Button
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
            component={Link}
            to="/about-organizations"
          >
            Organizations
          </Button>
          <Button
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
            component={Link}
            to="/pricing"
          >
            Pricing
          </Button>
          <Button
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
            component={Link}
            to="/contact-us"
          >
            Contact Us
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" className={classes.copyright}>
          Deepscope © {DateTime.local().toFormat('yyyy')}
          <br />
          <br />
          <MuiLink
            style={{
              fontWeight: 'bold',
              color: '#fff',
            }}
            component={Link}
            to="/tos"
          >
            Terms of Service
          </MuiLink>{' '}
          /{' '}
          <MuiLink
            style={{
              fontWeight: 'bold',
              color: '#fff',
            }}
            component={Link}
            to="/privacy"
          >
            Privacy Policy
          </MuiLink>
        </Typography>
      </Grid>
    </Grid>
  );
}
