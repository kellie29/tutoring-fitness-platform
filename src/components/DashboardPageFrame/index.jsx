// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import DashboardFrame from '../DashboardFrame';

import DashboardPageFrameDrawer from './DashboardPageFrameDrawer';
import DashboardPageFrameDrawerMobile from './DashboardPageFrameDrawerMobile';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));

type Props = {|
  children: React.Node,
|};

export default function DashboardPageFrame(props: Props) {
  const { children } = props;

  const classes = useStyles();

  return (
    <DashboardFrame>
      <div className={classes.layoutContainer}>
        <Hidden xsDown>
          <DashboardPageFrameDrawer />
        </Hidden>
        <Hidden smUp>
          <DashboardPageFrameDrawerMobile />
        </Hidden>
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </DashboardFrame>
  );
}
