// @flow

import * as React from 'react';
import { Client } from 'twilio-chat';
import invariant from 'invariant';
import { useAsync } from 'react-use';

import { graphql, createQuery } from '../../api';

import { type TwilioClientProviderQuery } from './__generated__/TwilioClientProviderQuery.graphql';

const useQuery = createQuery<TwilioClientProviderQuery>(graphql`
  query TwilioClientProviderQuery {
    currentSession {
      twilioToken
    }
  }
`);

export const twilioClientContext = React.createContext<Client | null>(null);

type Props = {|
  children?: React.Node,
|};

export default function TwilioClientProvider(props: Props) {
  const { children } = props;

  const query = useQuery();

  const twilioClientState = useAsync(async () => {
    if (!query.props) return new Promise(() => {});
    const { currentSession } = query.props;
    invariant(currentSession, 'Expected "currentSession');
    const { twilioToken } = currentSession;

    const client = await Client.create(twilioToken);
    // client.on('tokenExpired', ...);
    // client.on('connectionStateChanged', ...);

    return client;
  }, [query.props]);
  const twilioClient = twilioClientState.value ?? null;

  React.useEffect(() => {
    return () => {
      if (twilioClient) {
        twilioClient.shutdown();
      }
    };
  }, [twilioClient]);

  return (
    <twilioClientContext.Provider value={twilioClient}>{children}</twilioClientContext.Provider>
  );
}
