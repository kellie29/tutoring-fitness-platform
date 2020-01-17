// @flow

import * as React from 'react';
import { useDebounce } from 'react-use';

import SearchBar from '../SearchBar';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type ClientProfileFilterSelectViewQuery } from './__generated__/ClientProfileFilterSelectViewQuery.graphql';
import ClientProfileFilterSelectViewList from './ClientProfileFilterSelectViewList';

const useQuery = createQuery<ClientProfileFilterSelectViewQuery>(graphql`
  query ClientProfileFilterSelectViewQuery($filter: ClientProfileFilterInput) {
    ...ClientProfileFilterSelectViewList_query @arguments(filter: $filter)
  }
`);

type Props = {|
  value: string | null,
  onValueChange: (clientProfleId: string | null) => void,
|};

export default function ClientProfileFilterSelectView(props: Props) {
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

  const filter = React.useMemo(() => ({ search: debouncedSearch, ownerId: 'me' }), [
    debouncedSearch,
  ]);
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

  const onClientProfileClick = React.useCallback(
    (clientProfleId) => {
      if (value !== clientProfleId) {
        onValueChange(clientProfleId);
      } else {
        onValueChange(null);
      }
    },
    [onValueChange, value],
  );

  return (
    <>
      <SearchBar
        placeholder="Search Clients"
        value={search}
        onChange={onSearchChange}
        style={{ flexGrow: 0, marginBottom: 16 }}
      />
      {!query.props ? (
        <LoadingView />
      ) : (
        <ClientProfileFilterSelectViewList
          query={query.props}
          selectedClientProfileId={value}
          onClientProfileClick={onClientProfileClick}
        />
      )}
    </>
  );
}
