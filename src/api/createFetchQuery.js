// @flow

import * as React from 'react';
import { type GraphQLTaggedNode, fetchQuery as relayFetchQuery } from 'relay-runtime';

import useRelayEnvironment from './useRelayEnvironment';

// TODO: Import from relay-runtime
type RelayQuery<TVariables, TResponse> = {|
  variables: TVariables,
  response: TResponse,
|};

type UseFetchQuery<TRelayQuery: RelayQuery<any, any>> = () => (
  variables?: $PropertyType<TRelayQuery, 'variables'>,
) => Promise<$PropertyType<TRelayQuery, 'response'>>;

export default function createFetchQuery<TRelayQuery: RelayQuery<any, any>>(
  taggedNode: GraphQLTaggedNode,
): UseFetchQuery<TRelayQuery> {
  return () => {
    const relayEnvironment = useRelayEnvironment();

    const fetchQuery = React.useMemo(
      () => (variables) => relayFetchQuery(relayEnvironment, taggedNode, variables),
      [relayEnvironment],
    );

    return fetchQuery;
  };
}
