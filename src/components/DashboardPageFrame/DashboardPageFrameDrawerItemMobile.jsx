// @flow

import * as React from 'react';
import { Link, matchPath, type LocationShape } from 'react-router-dom';
import { makeStyles, Typography, Button } from '@material-ui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { drawerIconWidth } from './DashboardPageFrameDrawer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(2, 2),
    // minWidth: '100%',
    // maxWidth: '100%',
    color: 'white',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  containerSelected: {
    color: theme.palette.primary.main,
  },
  iconContainer: {
    flex: '0 0 auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginRight: theme.spacing(2),
    width: drawerIconWidth,
    overflow: 'hidden',
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

// TODO: Not like this
type MatchPathOptions = {
  path?: string | Array<string>,
  exact?: boolean,
  sensitive?: boolean,
  strict?: boolean,
};

type Props = {|
  to?: LocationShape | string,
  match?: MatchPathOptions | string | Array<string>,
  onClick?: () => void,
  icon: React.Node,
  children?: React.Node,
|};

export default function DashboardPageFrameDrawerItemMobile(props: Props) {
  const { to, match, onClick, icon, children } = props;

  const classes = useStyles();

  const selected = match ? matchPath(location.pathname, match) : false;

  return (
    <Button
      component={to ? Link : 'button'}
      to={to}
      onClick={onClick}
      className={classNames(classes.container, {
        [classes.containerSelected]: selected,
      })}
      role={['listitem', onClick || to ? 'button' : null].filter(Boolean).join(' ')}
    >
      {children && <Typography className={classes.text}>{children}</Typography>}
      <span className={classes.iconContainer}>{icon}</span>
    </Button>
  );
}
