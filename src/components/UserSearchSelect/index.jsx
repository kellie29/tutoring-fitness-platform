// @flow

import * as React from 'react';

import { graphql, createFetchQuery, createQuery } from '../../api';
import AsyncSelect from '../AsyncSelect';

import { type UserSearchSelectQuery } from './__generated__/UserSearchSelectQuery.graphql';
import { type UserSearchSelectUsersQuery } from './__generated__/UserSearchSelectUsersQuery.graphql';

const useQuery = createQuery<UserSearchSelectQuery>(graphql`
  query UserSearchSelectQuery($id: ID) {
    user(id: $id) {
      id
      name
    }
  }
`);

const useFetchQuery = createFetchQuery<UserSearchSelectUsersQuery>(graphql`
  query UserSearchSelectUsersQuery($filter: UserFilterInput) {
    users(filter: $filter, first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`);

type Props = {|
  ...React.ElementConfig<typeof AsyncSelect>,
  value: string,
  onValueChange: (userId: string | null) => void,
|};

export default function UserSearchSelect(props: Props) {
  const { value, onValueChange, ...restProps } = props;

  const query = useQuery({ id: value });
  const fetchQuery = useFetchQuery();

  const loadOptions = async (inputValue) => {
    const response = await fetchQuery({ filter: { search: inputValue } });

    return response.users.edges.map(({ node: user }) => ({
      label: user.name,
      value: user.id,
    }));
  };

  if (!query.props) {
    return null;
  }

  const { user } = query.props;

  return (
    <AsyncSelect
      defaultOptions
      loadOptions={loadOptions}
      value={user ? { label: user.name, value: user.id } : null}
      onChange={(nextValue) => onValueChange(nextValue && nextValue.value)}
      placeholder="Search a user"
      isClearable
      {...restProps}
    />
  );
}
