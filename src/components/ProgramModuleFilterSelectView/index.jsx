// @flow

import * as React from 'react';

import SearchBar from '../SearchBar';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import { type ProgramModuleFilterSelectViewQuery } from './__generated__/ProgramModuleFilterSelectViewQuery.graphql';
import ProgramModuleFilterSelectViewList from './ProgramModuleFilterSelectViewList';

const useQuery = createQuery<ProgramModuleFilterSelectViewQuery>(graphql`
  query ProgramModuleFilterSelectViewQuery($filter: ProgramModuleFilterInput) {
    ...ProgramModuleFilterSelectViewList_query @arguments(filter: $filter)
  }
`);

type Props = {|
  value: string | null,
  onValueChange: (programModuleId: string | null) => void,
|};

export default function ProgramModuleFilterSelectView(props: Props) {
  const { value, onValueChange } = props;

  const [search, setSearch] = React.useState('');
  const filter = React.useMemo(
    () => ({ search, isPublic: null, tagParentTagId: { eq: 'me' }, tagId: null, type: 'generic' }),
    [search],
  );
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

  return (
    <>
      <SearchBar
        placeholder="Search Modules"
        value={search}
        onChange={onSearchChange}
        style={{ flexGrow: 0 }}
      />
      {!query.props ? (
        <LoadingView />
      ) : (
        <ProgramModuleFilterSelectViewList
          query={query.props}
          selectedProgramModuleId={value}
          onProgramModuleClick={onValueChange}
        />
      )}
    </>
  );
}
