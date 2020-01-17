// @flow

import { commitMutation, type GraphQLTaggedNode } from 'relay-runtime';

import useRelayEnvironment from './useRelayEnvironment';

type RelayDeclarativeMutationConfig = any;
type RelayMutation<TVariables, TResponse> = { variables: TVariables, response: TResponse };

type MutationConfig = {|
  updater?: (proxyStore: any) => void,
|};

type CommitMutationConfig = {|
  updater?: (proxyStore: any) => void,
  configs?: Array<RelayDeclarativeMutationConfig>,
|};

type Commit<TRelayMutation: RelayMutation<any, any>> = (
  variables: $PropertyType<TRelayMutation, 'variables'>,
  config?: CommitMutationConfig,
) => Promise<$PropertyType<TRelayMutation, 'response'>>;

type UseMutation<TRelayMutation: RelayMutation<any, any>> = () => Commit<TRelayMutation>;

export default function createMutation<TRelayMutation: RelayMutation<any, any>>(
  taggedNode: GraphQLTaggedNode,
  // $FlowFixMe
  mutationConfig: MutationConfig = {},
): UseMutation<TRelayMutation> {
  return () => {
    const relayEnvironment = useRelayEnvironment();

    const commit = (variables, config) => {
      return new Promise((resolve, reject) => {
        commitMutation(relayEnvironment, {
          ...mutationConfig,
          ...config,
          mutation: taggedNode,
          variables,
          onCompleted: (response, errors) => {
            // TODO: Not like this
            if (errors && errors.length) {
              const error = errors[0];
              reject(error);
              return;
            }

            resolve(response);
          },
          onError: (error) => {
            reject(error);
          },
        });
      });
    };

    return commit;
  };
}
