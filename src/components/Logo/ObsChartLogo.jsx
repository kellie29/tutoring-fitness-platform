// @flow

import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

type Variant = 'full' | 'short';
type Color = 'black' | 'white';

type Props = {|
  to?: string,
  variant?: Variant,
  color?: Color,
  style?: any,
|};

export default function ObsChartLogo(props: Props) {
  const { to = '/dashboard', variant = 'full', color = 'black', style } = props;

  return (
    <Link style={{ textDecoration: 'unset', display: 'flex', ...style }} to={to}>
      {variant === 'full' && (
        <>
          <Typography style={{ color, fontWeight: 'bold', fontSize: 30, letterSpacing: -2 }}>
            Obs
          </Typography>
          <Typography
            color="primary"
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              letterSpacing: -2,
            }}
          >
            Chart
          </Typography>
        </>
      )}
      {variant === 'short' && (
        <>
          <Typography
            style={{
              color,
              fontWeight: 'bold',
              fontSize: 30,
              letterSpacing: -2,
            }}
          >
            O
          </Typography>
        </>
      )}
    </Link>
  );
}
