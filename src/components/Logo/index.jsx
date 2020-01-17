// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import appData from '../../data';

import ObsChartLogo from './ObsChartLogo';

type Variant = 'full' | 'short';
type Color = 'black' | 'white';

type Props = {|
  to?: string,
  variant?: Variant,
  color?: Color,
  style?: any,
|};

export default function Logo(props: Props) {
  const { to = '/dashboard', variant = 'full', color = 'black', style } = props;

  if (appData.logo === 'obschart') {
    return <ObsChartLogo {...props} />;
  }

  const assetName = {
    full: {
      black: 'fullBlack',
      white: 'fullWhite',
    },
    short: {
      black: 'shortBlack',
      white: 'shortWhite',
    },
  }[variant][color];

  const src = appData.logo[assetName];

  return (
    <Link style={{ textDecoration: 'unset', display: 'flex', ...style }} to={to}>
      <img
        src={src}
        alt=""
        style={{
          marginLeft: 2,
          minHeight: 20,
          height: 28,
        }}
      />
    </Link>
  );
}
