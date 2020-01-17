// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import { type Subscription } from '../../data';

type Props = {
  subscription: Subscription,
  color?: 'primary' | 'secondary',
  children: React.Node,
};

export default function SubscriptionPaper(props: Props) {
  const { subscription, color = 'primary', children } = props;

  return (
    <Paper
      style={{
        display: 'flex',
        flex: 1,
        maxWidth: 275,
        minWidth: 275,
        padding: 20,
        margin: 10,
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h4" style={{ fontWeight: 'bold' }} gutterBottom>
        {subscription.name}
      </Typography>
      <Typography variant="h5" style={{ fontWeight: 'bold' }} color={color}>
        {subscription.price}
      </Typography>
      <Typography variant="h5" style={{ fontWeight: 'bold', color: '#a9a9a9' }}>
        {subscription.text}
      </Typography>
      <div style={{ flexBasis: 16 }} />
      <div style={{ height: 120 }}>
        {subscription.features.map((feature) => (
          <div key={feature} style={{ display: 'flex' }}>
            <DoneIcon style={{ fontSize: 14, marginRight: 5 }} color={color} />
            <Typography style={{ display: 'flex', color: '#a9a9a9', fontSize: 12 }}>
              {feature}
            </Typography>
          </div>
        ))}
      </div>
      <div style={{ flexBasis: 16 }} />
      <div style={{ display: 'flex', placeContent: 'center' }}>{children}</div>
    </Paper>
  );
}
