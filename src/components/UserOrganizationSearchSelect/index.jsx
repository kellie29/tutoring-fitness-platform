// @flow

import * as React from 'react';
import invariant from 'invariant';

import { graphql, createQuery, createFetchQuery } from '../../api';
import AsyncSelect from '../AsyncSelect';

import { type UserOrganizationSearchSelectQuery } from './__generated__/UserOrganizationSearchSelectQuery.graphql';
import { type UserOrganizationSearchSelectUserQuery } from './__generated__/UserOrganizationSearchSelectUserQuery.graphql';

const useQuery = createQuery<UserOrganizationSearchSelectQuery>(graphql`
  query UserOrganizationSearchSelectQuery($id: ID) {
    userGroup(id: $id) {
      id
      name
    }
  }
`);

const useFetchQuery = createFetchQuery<UserOrganizationSearchSelectUserQuery>(graphql`
  query UserOrganizationSearchSelectUserQuery($userId: ID!, $search: String) {
    user(id: $userId) {
      organizations(search: $search, first: 20) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`);

type Props = {
  ...React.ElementConfig<typeof AsyncSelect>,
  userId: string,
  value: string | null,
  onValueChange: (string | null) => void,
};

export default function UserOrganizationSearchSelect(props: Props) {
  const { userId, value, onValueChange, ...restProps } = props;

  const query = useQuery({ id: value });
  const fetchQuery = useFetchQuery();

  const loadOptions = async (inputValue) => {
    const response = await fetchQuery({ userId, search: inputValue });
    const { user } = response;
    invariant(user, 'Expected "user"');

    return user.organizations.edges.map(({ node: organization }) => ({
      label: organization.name,
      value: organization.id,
    }));
  };

  if (!query.props) {
    return null;
  }

  const { userGroup } = query.props;

  return (
    <AsyncSelect
      defaultOptions
      loadOptions={loadOptions}
      value={userGroup ? { label: userGroup.name, value: userGroup.id } : null}
      onChange={(nextValue) => onValueChange(nextValue && nextValue.value)}
      placeholder="Search an Organization"
      isClearable
      {...restProps}
    />
  );
}
