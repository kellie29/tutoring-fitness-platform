// @flow

import * as React from 'react';
import { useDebounce } from 'react-use';

import SearchBar from '../SearchBar';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type UserGroupFilterSelectViewQuery } from './__generated__/UserGroupFilterSelectViewQuery.graphql';
import UserGroupFilterSelectViewList from './UserGroupFilterSelectViewList';

const useQuery = createQuery<UserGroupFilterSelectViewQuery>(graphql`
  query UserGroupFilterSelectViewQuery($filter: UserGroupFilterInput) {
    ...UserGroupFilterSelectViewList_query @arguments(filter: $filter)
  }
`);

type Props = {|
  value: string | null,
  onValueChange: (userGroupId: string | null) => void,
|};

export default function UserGroupFilterSelectView(props: Props) {
  const { value, onValueChange } = props;

  const [search, setSearch] = React.useState('');
  const [debouncedSearch, setDebouncedSearch] = React.useState('');
  useDebounce(
    () => {
      setDebouncedSearch(search);
    },
    500,
    [search],
  );

  const filter = React.useMemo(() => ({ search: debouncedSearch }), [debouncedSearch]);
  const query = useQuery({
    filter,
  });

  const onSearchChange = React.useCallback(
    (event) => {
      setSearch(event.target.value);
      onValueChange(null);
    },
    [onValueChange],
  );

  const onUserGroupClick = React.useCallback(
    (userGroupId) => {
      if (value !== userGroupId) {
        onValueChange(userGroupId);
      } else {
        onValueChange(null);
      }
    },
    [onValueChange, value],
  );

  return (
    <>
      <SearchBar
        placeholder="Search Organizations"
        value={search}
        onChange={onSearchChange}
        style={{ flexGrow: 0, marginBottom: 16 }}
      />
      {!query.props ? (
        <LoadingView />
      ) : (
        <UserGroupFilterSelectViewList
          query={query.props}
          selectedUserGroupId={value}
          onUserGroupClick={onUserGroupClick}
        />
      )}
    </>
  );
}
