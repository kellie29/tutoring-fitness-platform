// @flow

import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
// import { styled } from '@material-ui/styles';

import { getMockedComponents } from '../mocks';

// const Label = styled(Paper)(({ theme }) => ({
//   margin: theme.spacing(1, 1),
// }));

type Props = {
  component: string,
  label: string,
};

export default function EmptyChart(props: Props) {
  const { component, label } = props;
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          placeContent: 'center',
          placeItems: 'center',
          filter: 'blur(2px)',
        }}
      >
        {getMockedComponents(component)}
      </div>
      <div style={{ position: 'absolute', alignSelf: 'center' }}>
        <Paper elevation={4} borderRadius="50%" style={{ padding: 20 }}>
          <Typography variant="h6">{label}</Typography>
        </Paper>
      </div>
    </div>
  );
}
