// @flow

import * as React from 'react';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import UserGroupCreateDialog from '../UserGroupCreateDialog';
import { graphql, createQuery } from '../../api';
import DialogRoute from '../DialogRoute';
import LoadingView from '../LoadingView';
import ListPageHeader from '../ListPageHeader';

import { type UserGroupListPageQuery } from './__generated__/UserGroupListPageQuery.graphql';
import UserGroupList from './UserGroupList';

const useQuery = createQuery<UserGroupListPageQuery>(graphql`
  query UserGroupListPageQuery($filter: UserGroupFilterInput) {
    ...UserGroupList_query @arguments(filter: $filter)
  }
`);

export default createDashboardPage<any>(function UserGroupListPage() {
  const [search, searchInputProps] = useInputValue('');
  const filter = React.useMemo(
    () => ({
      search,
    }),
    [search],
  );
  const query = useQuery({ filter });

  return (
    <>
      <DialogRoute
        path="/dashboard/organizations/new"
        component={UserGroupCreateDialog}
        cancelTo="/dashboard/organizations"
        completeTo={(userGroup) => `/dashboard/organizations/view/${userGroup.id}?edit`}
      />
      <PageHelmet title="Organizations" />
      <ListPageHeader
        searchBarProps={{
          placeholder: 'Search Organizations',
          ...searchInputProps,
        }}
        actions={[
          {
            key: 'create',
            type: 'link',
            label: 'Create New Organization',
            to: '/dashboard/organizations/new',
            primary: true,
          },
        ]}
      />
      <DashboardPageBody>
        {!query.props ? <LoadingView /> : <UserGroupList query={query.props} />}
      </DashboardPageBody>
    </>
  );
});
