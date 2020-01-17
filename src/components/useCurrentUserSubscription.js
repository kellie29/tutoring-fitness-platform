// @flow

import { graphql, createQuery } from '../api';

import { type useCurrentUserSubscriptionQuery } from './__generated__/useCurrentUserSubscriptionQuery.graphql';

const useQuery = createQuery<useCurrentUserSubscriptionQuery>(graphql`
  query useCurrentUserSubscriptionQuery {
    currentSession {
      user {
        subscription {
          id
          slug
          name
        }
      }
    }
  }
`);

export default function useCurrentUserSubscription() {
  const currentSessionQuery = useQuery();

  return currentSessionQuery.props?.currentSession?.user.subscription || null;
}
