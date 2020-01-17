// @flow

import * as React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

type Props = {
  title: string,
  onViewAll?: () => void,
  children: any,
};

export default function ContentCard(props: Props) {
  const { title, onViewAll, children } = props;
  return (
    <Paper style={{ display: 'flex', flexDirection: 'column', padding: 16, height: 400 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        {onViewAll ? (
          <Button onClick={onViewAll} color="primary">
            View All
          </Button>
        ) : null}
      </div>
      {children}
    </Paper>
  );
}
