// @flow

import * as React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import ProgramModuleIcon from '../icons/ProgramModuleIcon';
import ProgramIcon from '../icons/ProgramIcon';
import UserGroupIcon from '../icons/UserGroupIcon';
// import useCurrentUserSubscription from '../useCurrentUserSubscription';
import { useDispatch } from '../../store';

import DashboardPageFrameDrawerItemMobile from './DashboardPageFrameDrawerItemMobile';

const useStyles = makeStyles(() => ({
  divider: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export default function DashboardPageFrameDrawerNavigationItemsMobile() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const onItemClick = React.useCallback(() => {
    dispatch({ type: 'drawerClose' });
  }, [dispatch]);

  // const currentUserSubscription = useCurrentUserSubscription();
  // const showOrganizations = currentUserSubscription?.slug === 'master';
  const showOrganizations = true;
  const showSubscriptions = true;

  return (
    <>
      <DashboardPageFrameDrawerItemMobile
        to="/dashboard"
        match={{ path: '/dashboard', exact: true }}
        icon={<HomeIcon />}
        onClick={onItemClick}
      >
        Home
      </DashboardPageFrameDrawerItemMobile>
      {(showOrganizations || showSubscriptions) && <Divider className={classes.divider} />}
      <DashboardPageFrameDrawerItemMobile
        to="/dashboard/modules"
        match={{ path: '/dashboard/modules' }}
        icon={<ProgramModuleIcon />}
        onClick={onItemClick}
      >
        Discover Modules
      </DashboardPageFrameDrawerItemMobile>
      <DashboardPageFrameDrawerItemMobile
        to="/dashboard/programs"
        match={{ path: '/dashboard/programs' }}
        icon={<ProgramIcon />}
        onClick={onItemClick}
      >
        Discover Programs
      </DashboardPageFrameDrawerItemMobile>
      {(showOrganizations || showSubscriptions) && (
        <>
          <Divider className={classes.divider} />
          {showOrganizations && (
            <DashboardPageFrameDrawerItemMobile
              to="/dashboard/organizations"
              match={{ path: '/dashboard/organizations' }}
              icon={<UserGroupIcon />}
              onClick={onItemClick}
            >
              Organizations
            </DashboardPageFrameDrawerItemMobile>
          )}
          {showSubscriptions && (
            <DashboardPageFrameDrawerItemMobile
              to="/dashboard/subscriptions"
              match={{ path: '/dashboard/subscriptions' }}
              icon={<PaymentIcon />}
              onClick={onItemClick}
            >
              Subscriptions
            </DashboardPageFrameDrawerItemMobile>
          )}
        </>
      )}
      <Divider className={classes.divider} />
      <DashboardPageFrameDrawerItemMobile
        to="/dashboard/help"
        match={{ path: '/dashboard/help', exact: true }}
        icon={<HelpOutlineIcon />}
        onClick={onItemClick}
      >
        Help
      </DashboardPageFrameDrawerItemMobile>
    </>
  );
}
