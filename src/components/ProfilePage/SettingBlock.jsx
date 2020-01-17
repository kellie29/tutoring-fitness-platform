// @flow
import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';

type Props = {
  title: string,
  description: string,
  children: React.Node,
};

export default function SettingBlock(props: Props) {
  const { title, description, children } = props;

  return (
    <Grid container direction="row" style={{ borderTop: '1px #eaeaea solid', padding: 10 }}>
      <div style={{ flex: 1, padding: 5, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Grid container style={{ maxHeight: 'fit-content' }}>
          <Typography variant="h6" style={{ height: 'fit-content' }}>
            {title}
          </Typography>
        </Grid>
        <Grid container style={{ maxHeight: 'fit-content' }}>
          <Typography style={{ height: 'fit-content' }}>{description}</Typography>
        </Grid>
      </div>
      <div style={{ flex: 2, padding: 5, alignItems: 'flex-start', flexDirection: 'column' }}>
        {children}
      </div>
    </Grid>
  );
}
