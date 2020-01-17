// @flow

import * as React from 'react';
import { useDebounce } from 'react-use';

import SearchBar from '../SearchBar';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramFilterSelectViewQuery } from './__generated__/ProgramFilterSelectViewQuery.graphql';
import ProgramFilterSelectViewList from './ProgramFilterSelectViewList';

const useQuery = createQuery<ProgramFilterSelectViewQuery>(graphql`
  query ProgramFilterSelectViewQuery($filter: ProgramFilterInput) {
    ...ProgramFilterSelectViewList_query @arguments(filter: $filter)
  }
`);

type Props = {|
  value: string | null,
  onValueChange: (programModuleId: string | null) => void,
|};

export default function ProgramFilterSelectView(props: Props) {
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

  const filter = React.useMemo(() => ({ search: debouncedSearch, isPublic: null, tagId: 'me' }), [
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

  const onProgramClick = React.useCallback(
    (programId) => {
      if (value !== programId) {
        onValueChange(programId);
      } else {
        onValueChange(null);
      }
    },
    [onValueChange, value],
  );

  return (
    <>
      <SearchBar
        placeholder="Search Programs"
        value={search}
        onChange={onSearchChange}
        style={{ flexGrow: 0, marginBottom: 16 }}
      />
      {!query.props ? (
        <LoadingView />
      ) : (
        <ProgramFilterSelectViewList
          query={query.props}
          selectedProgramId={value}
          onProgramClick={onProgramClick}
        />
      )}
    </>
  );
}
