// @flow

import * as React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { type MatchPathOptions } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';

import ProgramModuleIcon from '../icons/ProgramModuleIcon';
import ProgramIcon from '../icons/ProgramIcon';
import MyProgramIcon from '../icons/MyProgramIcon';
import UserGroupIcon from '../icons/UserGroupIcon';
import UserIcon from '../icons/UserIcon';
import useCurrentUserSubscription from '../useCurrentUserSubscription';
import { useSelector, useDispatch } from '../../store';
import { graphql, createQuery } from '../../api';
import Logo from '../Logo';
import UserAvatar from '../UserAvatar';
import ChatIcon from '../icons/ChatIcon';

import DashboardPageFrameDrawerItem from './DashboardPageFrameDrawerItem';
import { type DashboardPageFrameDrawerQuery } from './__generated__/DashboardPageFrameDrawerQuery.graphql';

const useQuery = createQuery<DashboardPageFrameDrawerQuery>(
  graphql`
    query DashboardPageFrameDrawerQuery {
      currentSession {
        user {
          name
          ...UserAvatar_user
        }
      }
      tags(filter: { parentTagId: { eq: "me" } }, first: 5) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `,
);

const drawerWidth = 260;
export const drawerIconWidth = 32;
const drawerClosedWidth = 60;

const useStyles = makeStyles((theme) => ({
  drawer: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'flex-start',
    width: drawerWidth,
    backgroundColor: theme.palette.background.main,
    overflow: 'hidden',
    overflowY: 'auto',
  },
  drawerOpen: {
    transition: [
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    ],
  },
  drawerClosed: {
    transition: [
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ],
    width: drawerClosedWidth,
  },
  logoContainer: {
    display: 'flex',
    placeItems: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    height: drawerClosedWidth,
    paddingLeft: `calc(${theme.spacing(2)}px + 2px)`,
    marginBottom: theme.spacing(2),
    flexShrink: 0,
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
  divider: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const tagSlugToItem = {
  'personal-training-recipe': {
    name: 'Recipes',
    icon: <RestaurantMenuIcon />,
  },
  'personal-training-habit': {
    name: 'Habits',
    icon: <HdrStrongIcon />,
  },
  'personal-training-exercise': {
    name: 'Exercises',
    icon: <SportsHandballIcon />,
  },
};

const tagOrder = [
  'personal-training-recipe',
  'personal-training-habit',
  'personal-training-exercise',
];

export default function DashboardPageFrameDrawer() {
  const classes = useStyles();
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen);
  const dispatch = useDispatch();
  const query = useQuery();
  const tags = query.props?.tags;
  const user = query.props?.currentSession?.user;

  const onCloseClick = React.useCallback(() => dispatch({ type: 'drawerToggle' }), [dispatch]);

  const currentUserSubscription = useCurrentUserSubscription();
  const isUserMaster = currentUserSubscription?.slug === 'master';
  // const showOrganizations = currentUserSubscription?.slug === 'master';
  const showOrganizations = true;
  const showClientProfiles = true;
  const showSubscriptions = false;
  const showHelp = false;

  return (
    <nav
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isDrawerOpen,
        [classes.drawerClosed]: !isDrawerOpen,
      })}
    >
      <div
        className={classNames(classes.logoContainer, {
          [classes.logoContainerOpen]: isDrawerOpen,
          [classes.logoContainerClosed]: !isDrawerOpen,
        })}
      >
        <Logo color="white" variant={isDrawerOpen ? 'full' : 'short'} />
      </div>
      <DashboardPageFrameDrawerItem
        to="/dashboard"
        match={{ path: '/dashboard', exact: true }}
        icon={<HomeIcon />}
      >
        Home
      </DashboardPageFrameDrawerItem>
      {showClientProfiles && (
        <>
          <Divider className={classes.divider} />
          {showClientProfiles && (
            <DashboardPageFrameDrawerItem
              to="/dashboard/clients"
              match={{ path: '/dashboard/clients' }}
              icon={<UserIcon />}
            >
              My Clients
            </DashboardPageFrameDrawerItem>
          )}
        </>
      )}
      <DashboardPageFrameDrawerItem
        to="/dashboard/myprograms"
        match={{ path: '/dashboard/myprograms' }}
        icon={<MyProgramIcon />}
      >
        My Programs
      </DashboardPageFrameDrawerItem>
      <DashboardPageFrameDrawerItem
        to="/dashboard/programs"
        match={{ path: '/dashboard/programs' }}
        icon={<ProgramIcon />}
      >
        Discover Programs
      </DashboardPageFrameDrawerItem>
      <Divider className={classes.divider} />
      <DashboardPageFrameDrawerItem
        to="/dashboard/chat"
        match={{ path: '/dashboard/chat' }}
        icon={<ChatIcon />}
      >
        Messaging
      </DashboardPageFrameDrawerItem>
      {(showOrganizations || showSubscriptions) && <Divider className={classes.divider} />}
      {tags &&
        [...tags.edges]
          .sort((a, b) => tagOrder.indexOf(a.node.slug) - tagOrder.indexOf(b.node.slug))
          .map(({ node: tag }) => (
            <DashboardPageFrameDrawerItem
              key={tag.id}
              to={`/dashboard/modules/${tag.id}`}
              match={{ path: `/dashboard/modules/${tag.id}` }}
              icon={tagSlugToItem[tag.slug]?.icon ?? <ProgramModuleIcon />}
            >
              {tagSlugToItem[tag.slug]?.name ?? tag.slug}
            </DashboardPageFrameDrawerItem>
          ))}
      {(showOrganizations || showSubscriptions) && (
        <>
          <Divider className={classes.divider} />
          {showOrganizations && (
            <DashboardPageFrameDrawerItem
              to="/dashboard/organizations"
              match={{ path: '/dashboard/organizations' }}
              icon={<UserGroupIcon />}
            >
              Organizations
            </DashboardPageFrameDrawerItem>
          )}
          {showSubscriptions && (
            <DashboardPageFrameDrawerItem
              to="/dashboard/subscriptions"
              match={{ path: '/dashboard/subscriptions' }}
              icon={<PaymentIcon />}
            >
              Subscriptions
            </DashboardPageFrameDrawerItem>
          )}
        </>
      )}
      {isUserMaster && (
        <>
          <Divider className={classes.divider} />
          <DashboardPageFrameDrawerItem
            to="/dashboard/modules"
            match={{ path: '/dashboard/modules', exact: true }}
            icon={<ProgramModuleIcon />}
          >
            Modules
          </DashboardPageFrameDrawerItem>
          <DashboardPageFrameDrawerItem
            to="/dashboard/users"
            match={{ path: '/dashboard/users' }}
            icon={<UserIcon />}
          >
            Users
          </DashboardPageFrameDrawerItem>
        </>
      )}
      {showHelp && (
        <>
          <Divider className={classes.divider} />
          <DashboardPageFrameDrawerItem
            to="/dashboard/help"
            match={{ path: '/dashboard/help' }}
            icon={<HelpOutlineIcon />}
          >
            Help
          </DashboardPageFrameDrawerItem>
        </>
      )}
      <div style={{ flexGrow: 1 }} />
      {user && (
        <DashboardPageFrameDrawerItem
          to="/dashboard/profile"
          match={{ path: '/dashboard/profile' }}
          icon={<UserAvatar className={classes.userAvatar} user={user} />}
        >
          {user.name}
        </DashboardPageFrameDrawerItem>
      )}
      <DashboardPageFrameDrawerItem
        icon={isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        onClick={onCloseClick}
      >
        Close
      </DashboardPageFrameDrawerItem>
    </nav>
  );
}
