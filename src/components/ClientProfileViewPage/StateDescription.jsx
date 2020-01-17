// @flow

import * as React from 'react';

type Props = {
  icon: React.Node,
  children: string,
};

type ReadOnlyProps = $ReadOnly<Props>;

export default function StateDescription(props: ReadOnlyProps) {
  const { children, icon } = props;
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {icon}
      <span style={{ marginLeft: '10px', alignSelf: 'center' }}>{children}</span>
    </div>
  );
}
