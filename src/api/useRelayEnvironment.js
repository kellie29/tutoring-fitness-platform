// @ flow

import * as React from 'react';
import { ReactRelayContext } from 'react-relay';

export default function useRelayEnvironment() {
  const reactRelayContext = React.useContext(ReactRelayContext);

  return reactRelayContext.environment;
}
