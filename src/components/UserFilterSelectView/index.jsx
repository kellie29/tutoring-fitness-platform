// @flow

import * as React from 'react';
import { useDebounce } from 'react-use';

import SearchBar from '../SearchBar';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type UserFilterSelectViewQuery } from './__generated__/UserFilterSelectViewQuery.graphql';
import UserFilterSelectViewList from './UserFilterSelectViewList';

const useQuery = createQuery<UserFilterSelectViewQuery>(graphql`
  query UserFilterSelectViewQuery($filter: UserFilterInput) {
    ...UserFilterSelectViewList_query @arguments(filter: $filter)
  }
`);

type Props = {|
  value: string | null,
  onValueChange: (userId: string | null) => void,
|};

export default function UserFilterSelectView(props: Props) {
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

  const onUserClick = React.useCallback(
    (userId) => {
      if (value !== userId) {
        onValueChange(userId);
      } else {
        onValueChange(null);
      }
    },
    [onValueChange, value],
  );

  return (
    <>
      <SearchBar
        placeholder="Search Users"
        value={search}
        onChange={onSearchChange}
        style={{ flexGrow: 0, marginBottom: 16 }}
      />
      {!query.props ? (
        <LoadingView />
      ) : (
        <UserFilterSelectViewList
          query={query.props}
          selectedUserId={value}
          onUserClick={onUserClick}
        />
      )}
    </>
  );
}
