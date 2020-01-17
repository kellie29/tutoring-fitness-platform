// @flow

import * as React from 'react';

import PageFrameHeader from './PageFrameHeader';
import PageFrameFooter from './PageFrameFooter';

type Props = {
  children: React.Node,
};

export default function PageFrame(props: Props) {
  const { children } = props;

  return (
    <>
      <PageFrameHeader />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', background: '#fefefe' }}>
        {children}
      </div>
      <PageFrameFooter />
    </>
  );
}
