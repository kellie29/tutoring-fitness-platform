// @flow

import * as React from 'react';

const refContext = React.createContext(React.createRef<HTMLDivElement>());

export function useDashboardPageScrollViewRef() {
  return React.useContext(refContext);
}

type Props = {| children: React.Node |};

export default function DashboardPageScrollView({ children }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <refContext.Provider value={ref}>{children}</refContext.Provider>
    </div>
  );
}
