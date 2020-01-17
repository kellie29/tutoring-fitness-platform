// @flow

import { type GraphQLTaggedNode } from 'relay-runtime';
import { useQuery } from 'relay-hooks';

// TODO: Import from relay-runtime
type RelayQuery<TVariables, TResponse> = {|
  variables: TVariables,
  response: TResponse,
|};

type UseQuery<TRelayQuery: RelayQuery<any, any>> = (
  variables?: $PropertyType<TRelayQuery, 'variables'>,
) => {
  props: $PropertyType<TRelayQuery, 'response'> | null,
  error: Error | null,
  retry: () => void | null,
  cached: boolean,
  relay: any,
};

type CreateQueryConfig = {|
  fetchPolicy?: 'store-only' | 'store-or-network' | 'store-and-network' | 'network-only',
|};

export default function createQuery<TRelayQuery: RelayQuery<any, any>>(
  taggedNode: GraphQLTaggedNode,
  { fetchPolicy }: CreateQueryConfig = {},
): UseQuery<TRelayQuery> {
  // TODO: Add more options https://github.com/relay-tools/relay-hooks/blob/7d9bb632ac23362a7041656fafcd258a6a2d193e/src/RelayHooksType.ts
  return (variables) => {
    const query = useQuery(taggedNode, variables, {
      fetchPolicy,
    });

    if (query.error) {
      throw query.error;
    }

    return query;
  };
}
