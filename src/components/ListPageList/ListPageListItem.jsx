//  @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';

type Props = {|
  children: React.Node,
|};

export default function ListPageListItem(props: Props) {
  const { children } = props;

  return (
    <Grid item xs={12} md={8}>
      {children}
    </Grid>
  );
}
