// @flow

import * as React from 'react';
import { Typography } from '@material-ui/core';

export default function TestWarningView() {
  return (
    <div
      style={{
        backgroundColor: 'rgb(248, 211, 73)',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body2"
        style={{
          // textTransform: 'uppercase',
          fontWeight: 'bold',
        }}
      >
        BETA TESTING: We are currently beta testing our software. Only signup and use to test and
        provide feedback.
      </Typography>
    </div>
  );
}
