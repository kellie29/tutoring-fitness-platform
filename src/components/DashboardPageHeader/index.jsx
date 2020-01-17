// @flow

import * as React from 'react';

type Props = {
  children: React.Node,
};

export default function DashboardPageHeader(props: Props) {
  const { children } = props;

  return <div style={{ display: 'flex', justifyContent: 'center' }}>{children}</div>;
}
