// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { type MatchPathOptions } from 'react-router-dom';

import { useSelector, useDispatch } from '../../store';
import { graphql, createQuery } from '../../api';
import Logo from '../Logo';
import UserAvatar from '../UserAvatar';

import { type DashboardPageFrameDrawerMobileQuery } from './__generated__/DashboardPageFrameDrawerMobileQuery.graphql';
import DashboardPageFrameDrawerNavigationItemsMobile from './DrawerNavigationItemsMobile';
import DashboardPageFrameDrawerItemMobile from './DashboardPageFrameDrawerItemMobile';

const useQuery = createQuery<DashboardPageFrameDrawerMobileQuery>(
  graphql`
    query DashboardPageFrameDrawerMobileQuery {
      currentSession {
        user {
          name
          ...UserAvatar_user
        }
      }
    }
  `,
);

// const drawerWidth = 260;
export const drawerIconWidth = 32;
// const drawerClosedWidth = 60;
const drawerClosedHeight = 60;

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: drawerClosedHeight,
  },
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: theme.zIndex.drawer,
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'flex-end',
    pointerEvents: 'none',
  },
  drawer: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'flex-end',
    width: 0,
    // height: drawerClosedHeight,
    backgroundColor: theme.palette.background.main,
    overflow: 'hidden',
    pointerEvents: 'auto',
  },
  drawerOpen: {
    transition: [
      theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    ],
    width: 'auto',
    // height: 'auto',
  },
  drawerClosed: {
    transition: [
      theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ],
  },
  headRow: {
    width: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.main,
    pointerEvents: 'auto',
  },
  logoContainer: {
    display: 'flex',
    placeItems: 'center',
    // width: 1002,
    // minWidth: '100%',
    // maxWidth: '100%',
    // height: '100%',
    alignSelf: 'stretch',
    paddingLeft: `calc(${theme.spacing(2)}px + 2px)`,
    paddingRight: `calc(${theme.spacing(2)}px + 2px)`,
    // marginBottom: theme.spacing(2),
  },
  logoContainerOpen: {
    transition: [
      theme.transitions.create('background', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    ],
    background: 'transparent',
  },
  logoContainerClosed: {
    transition: [
      theme.transitions.create('background', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ],
    background: theme.palette.primary.main,
  },
  userAvatar: {
    border: '1px solid currentcolor',
    width: drawerIconWidth - 2,
    height: drawerIconWidth - 2,
  },
}));

export default function DashboardPageFrameDrawerMobile() {
  const classes = useStyles();
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen);
  const dispatch = useDispatch();
  const query = useQuery();
  const user = query.props?.currentSession?.user;

  const onCloseClick = React.useCallback(() => dispatch({ type: 'drawerToggle' }), [dispatch]);

  return (
    <>
      <div className={classes.spacer} />
      <nav className={classes.container}>
        <div className={classes.headRow}>
          <div
            className={classNames(classes.logoContainer)}
            onClick={() => dispatch({ type: 'drawerClose' })}
          >
            <Logo color="white" variant="full" />
          </div>
          <div style={{ flexGrow: 1 }} />
          {user && (
            <DashboardPageFrameDrawerItemMobile
              to="/dashboard/profile"
              match={{ path: '/dashboard/profile' }}
              icon={<UserAvatar className={classes.userAvatar} user={user} />}
              onClick={() => dispatch({ type: 'drawerClose' })}
            />
          )}
          <DashboardPageFrameDrawerItemMobile
            icon={isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            onClick={onCloseClick}
          />
        </div>
        <div
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClosed]: !isDrawerOpen,
          })}
        >
          <DashboardPageFrameDrawerNavigationItemsMobile />
        </div>
      </nav>
    </>
  );
}
