// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { graphql, createQuery } from '../../api';
import Logo from '../Logo';
import { dashboardEnabled } from '../../config';

import { type PageFrameHeaderQuery } from './__generated__/PageFrameHeaderQuery.graphql';
import HamburgerMenu from './HamburgerMenu';

function NavigationButtons() {
  return (
    <>
      <Button
        style={{
          fontWeight: 'bold',
          fontSize: 16,
        }}
        component={Link}
        to="/fitness"
      >
        Fitness
      </Button>
      <Button
        style={{
          fontWeight: 'bold',
          fontSize: 16,
        }}
        component={Link}
        to="/medical"
      >
        Medical
      </Button>
      <Button
        style={{
          fontWeight: 'bold',
          fontSize: 16,
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
        }}
        component={Link}
        to="/pricing"
      >
        Pricing
      </Button>
    </>
  );
}

const useQuery = createQuery<PageFrameHeaderQuery>(graphql`
  query PageFrameHeaderQuery {
    currentSession {
      id
    }
  }
`);

export default function PageFrameHeader() {
  const query = useQuery();
  const currentSession = query.props?.currentSession;
  const smallScreen = useMediaQuery('(max-width:875px)');

  return (
    <AppBar
      position="static"
      color="default"
      style={{ boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.2)', overflow: 'hidden' }}
    >
      <Toolbar>
        <Logo to="/" />
        {!smallScreen ? (
          <Grid container alignItems="center" justify="flex-end">
            <NavigationButtons />
            <div style={{ width: 45 }} />
            {currentSession ? (
              <Button
                style={{
                  borderRadius: 40,
                  marginRight: 15,
                }}
                variant="outlined"
                component={Link}
                to="/dashboard/"
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                {dashboardEnabled && (
                  <Button
                    style={{
                      borderRadius: 40,
                      marginRight: 15,
                    }}
                    variant="outlined"
                    component={Link}
                    to="/dashboard/login"
                  >
                    Login
                  </Button>
                )}
              </>
            )}
            <Button
              style={{
                color: '#fff',
                boxShadow: 'unset',
                borderRadius: 40,
                fontWeight: 600,
              }}
              variant="contained"
              color="secondary"
              component={Link}
              to={dashboardEnabled ? '/dashboard/signup' : '/contact-us'}
            >
              Start For Free
            </Button>
          </Grid>
        ) : (
          <Grid container alignItems="center" justify="flex-end">
            <HamburgerMenu>
              <NavigationButtons />
            </HamburgerMenu>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}
