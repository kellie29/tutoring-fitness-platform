// @flow

import { useSelector } from '../store';
import { graphql, createQuery } from '../api';

import { type useIsAuthenticatedQuery } from './__generated__/useIsAuthenticatedQuery.graphql';

const useQuery = createQuery<useIsAuthenticatedQuery>(graphql`
  query useIsAuthenticatedQuery($sessionToken: String) {
    session(token: $sessionToken) {
      user {
        id
      }
    }
  }
`);

export default function useIsAuthenticated() {
  const userAuthenticationToken = useSelector((state) => state.userAuthenticationToken);

  const isAuthenticatedQuery = useQuery({
    sessionToken: userAuthenticationToken,
  });

  if (!userAuthenticationToken) {
    return false;
  }

  if (!isAuthenticatedQuery.props) {
    return null;
  }

  return !!isAuthenticatedQuery.props.session;
}
