// @flow

import * as React from 'react';

type Props = {
  icon: React.Node,
  children: React.Node,
};

export default function BlocksActionBlockEditor(props: Props) {
  const { icon, children } = props;

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>{icon}</div>
      {children}
    </>
  );
}
