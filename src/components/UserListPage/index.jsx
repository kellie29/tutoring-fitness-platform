// @flow

import * as React from 'react';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import LoadingView from '../LoadingView';
import { graphql, createQuery } from '../../api';
import ListPageHeader from '../ListPageHeader';

import { type UserListPageQuery } from './__generated__/UserListPageQuery.graphql';
import UserList from './UserList';

const useQuery = createQuery<UserListPageQuery>(graphql`
  query UserListPageQuery($filter: UserFilterInput) {
    ...UserList_query @arguments(filter: $filter)
  }
`);

export default createDashboardPage<any>(function UserListPage() {
  const [search, searchInputProps] = useInputValue('');
  const filter = React.useMemo(() => ({ search }), [search]);
  const query = useQuery({ filter });

  return (
    <>
      <PageHelmet title="Users" />
      <ListPageHeader
        searchBarProps={{
          placeholder: 'Search Users',
          ...searchInputProps,
        }}
      />
      <DashboardPageBody hideDownBreakpoint="xs">
        {!query.props ? <LoadingView /> : <UserList query={query.props} />}
      </DashboardPageBody>
    </>
  );
});
