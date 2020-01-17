// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import { useWindowSize } from 'react-use';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  screenSizeWarningContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
    placeItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
}));

// TODO: Get this from MUI
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {|
  down: Breakpoint,
  children: React.Node,
|};

export default function ScreenSizeGate(props: Props) {
  const { down, children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const windowSize = useWindowSize();

  const nextBreakpoint =
    theme.breakpoints.keys.indexOf(down) !== -1
      ? theme.breakpoints.keys[theme.breakpoints.keys.indexOf(down) + 1]
      : undefined;
  const shouldUserTryLandscape = nextBreakpoint
    ? windowSize.height > theme.breakpoints.values[nextBreakpoint]
    : false;
  const hideChildren = useMediaQuery(theme.breakpoints.down(down));

  if (hideChildren) {
    return (
      <div className={classes.screenSizeWarningContainer}>
        <Typography variant="h5" gutterBottom>
          Screen Size Not Supported
        </Typography>
        <Typography variant="body1">
          {shouldUserTryLandscape
            ? 'Try rotating your device.'
            : 'Please switch to a computer or a tablet.'}
        </Typography>
      </div>
    );
  }

  return children;
}
