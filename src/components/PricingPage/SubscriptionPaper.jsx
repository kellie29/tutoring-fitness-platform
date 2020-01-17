// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Paper, Button } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import { type Subscription } from '../../data';

type Props = {
  subscription: Subscription,
};

export default function SubscriptionPaper(props: Props) {
  const { subscription } = props;

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
      <Typography variant="h5" style={{ fontWeight: 'bold' }} color="primary">
        {subscription.price}
      </Typography>
      <Typography variant="h5" style={{ fontWeight: 'bold', color: '#a9a9a9' }}>
        {subscription.text}
      </Typography>
      <div style={{ flexBasis: 16 }} />
      <div style={{ height: 120 }}>
        {subscription.features.map((feature) => (
          <div key={feature} style={{ display: 'flex' }}>
            <DoneIcon style={{ fontSize: 14, marginRight: 5 }} color="primary" />
            <Typography style={{ display: 'flex', color: '#a9a9a9', fontSize: 12 }}>
              {feature}
            </Typography>
          </div>
        ))}
      </div>
      <div style={{ flexBasis: 16 }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={subscription.link}
          style={{
            borderRadius: '40px',
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            boxShadow: 'unset',
            letterSpacing: 1,
            textTransform: 'unset',
          }}
        >
          {subscription.buttonText}
        </Button>
        {subscription.buttonSubtext && (
          <>
            <br />
            <Typography
              variant="caption"
              align="center"
              style={{
                fontWeight: 600,
                fontSize: 8,
                letterSpacing: 1,
                marginBottom: 10,
                color: '#a9a9a9',
                textTransform: 'uppercase',
              }}
            >
              {subscription.buttonSubtext}
            </Typography>
          </>
        )}
      </div>
    </Paper>
  );
}
