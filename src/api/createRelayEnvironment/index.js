// @flow

import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  cacheMiddleware,
  authMiddleware,
  urlMiddleware,
} from 'react-relay-network-modern';
import { Duration } from 'luxon';

import { appName, appVersion } from '../../config';

import uploadMiddleware from './uploadMiddleware';

type Config = {
  url: string,
  authenticationToken: string | null,
};

export default function createRelayEnvironment(getConfig: () => Config) {
  const network = new RelayNetworkLayer([
    cacheMiddleware({
      size: 100,
      ttl: Duration.fromObject({ minutes: 1 }).as('milliseconds'),
      clearOnMutation: true,
    }),
    urlMiddleware({
      url: () => getConfig().url,
      headers: () => ({
        'X-OBSCHART-APPNAME': appName,
        'X-OBSCHART-APPVERSION': appVersion,
      }),
    }),
    authMiddleware({
      // $FlowFixMe
      token: () => getConfig().authenticationToken,
    }),
    uploadMiddleware(),
  ]);

  const environment = new Environment({
    network,
    store: new Store(new RecordSource()),
  });

  return environment;
}
