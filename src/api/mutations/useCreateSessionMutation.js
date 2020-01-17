// @flow

import { graphql, createMutation } from '..';

import { type useCreateSessionMutationCreateSessionMutation } from './__generated__/useCreateSessionMutationCreateSessionMutation.graphql';

export default createMutation<useCreateSessionMutationCreateSessionMutation>(graphql`
  mutation useCreateSessionMutationCreateSessionMutation($input: CreateSessionInput!) {
    createSession(input: $input) {
      token
      session {
        id
      }
    }
  }
`);
