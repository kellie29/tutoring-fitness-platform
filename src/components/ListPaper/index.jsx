//  @flow

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
  },
}));

type Props = {|
  ...React.ElementConfig<typeof Paper>,
  children: React.Node,
|};

export default function ListPaper(props: Props) {
  const { children, ...restProps } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.root} {...restProps}>
      {children}
    </Paper>
  );
}
