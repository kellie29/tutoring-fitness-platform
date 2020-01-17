// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import ScreenSizeGate, { type Breakpoint } from '../ScreenSizeGate';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  padded: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  unpadded: {
    flexGrow: 1,
  },
  centered: {
    placeContent: 'center',
    placeItems: 'center',
  },
}));

type Props = {|
  variant?: 'padded' | 'unpadded' | 'centered',
  hideDownBreakpoint?: Breakpoint | false,
  style?: any,
  children: React.Node,
|};

export default function DashboardPageBody(props: Props) {
  const { variant = 'padded', hideDownBreakpoint = false, style, children } = props;

  const classes = useStyles();

  return (
    <main className={`${classes.container} ${classes[variant]}`} style={style}>
      {hideDownBreakpoint ? (
        <ScreenSizeGate down={hideDownBreakpoint}>{children}</ScreenSizeGate>
      ) : (
        children
      )}
    </main>
  );
}
