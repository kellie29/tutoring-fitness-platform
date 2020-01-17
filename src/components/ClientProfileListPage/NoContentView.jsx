//  @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function NoContentView() {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body1" gutterBottom align="center">
        You don&apos;t have any clients yet.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <Button
          component={Link}
          to="/dashboard/clients/new"
          variant="contained"
          size="large"
          color="secondary"
          style={{ color: '#ffffff', fontWeight: 800 }}
        >
          Add a Client
        </Button>
      </div>
    </div>
  );
}
