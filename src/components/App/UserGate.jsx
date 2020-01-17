// @flow

import * as React from 'react';
import { useUpdate } from 'react-use';

import { useDispatchers, useSelector } from '../../store';
import { graphql, createQuery, useRelayEnvironment } from '../../api';

import { type UserGateQuery } from './__generated__/UserGateQuery.graphql';

const useQuery = createQuery<UserGateQuery>(
  graphql`
    query UserGateQuery($token: String) {
      session(token: $token) {
        id
      }
      currentSession {
        id
      }
    }
  `,
  {
    fetchPolicy: 'network-only',
  },
);

type Props = {|
  children: React.Node,
|};

export default function UserGate(props: Props) {
  const { children } = props;

  const userAuthenticationToken = useSelector((state) => state.userAuthenticationToken);
  const query = useQuery({
    token: userAuthenticationToken,
  });
  const dispatchers = useDispatchers();
  const update = useUpdate();
  const relayEnvironment = useRelayEnvironment();

  if (!query.props) return null;

  const sessionId = query.props.session?.id;
  const currentSessionId = query.props.currentSession?.id;

  // Reset store if there's a mismatch
  if (sessionId !== currentSessionId) {
    relayEnvironment
      .getStore()
      .getSource()
      .clear();
    update();
    return null;
  }

  // Reset token if it's invalid
  if (userAuthenticationToken && !query.props.session) {
    dispatchers.logout();
    return null;
  }

  return children;
}
