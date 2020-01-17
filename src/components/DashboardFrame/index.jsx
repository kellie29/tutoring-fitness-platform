// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import TestWarningView from '../TestWarningView';
import appData from '../../data';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
}));

type Props = {|
  children: React.Node,
|};

export default function DashboardFrame(props: Props) {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
      {appData.showBetaWarning ? <TestWarningView /> : null}
    </div>
  );
}
