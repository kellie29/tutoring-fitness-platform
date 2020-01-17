// @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  padded: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  unpadded: {
    flexGrow: 1,
  },
}));

type Props = {|
  variant?: 'padded' | 'unpadded',
  children: React.Node,
|};

export default function DashboardPageTabBody(props: Props) {
  const { variant = 'padded', children } = props;

  const classes = useStyles();

  return <div className={classes[variant]}>{children}</div>;
}
