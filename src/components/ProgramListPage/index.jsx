// @flow

import * as React from 'react';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import ProgramCreateDialog from '../ProgramCreateDialog';
import DialogRoute from '../DialogRoute';
import LoadingView from '../LoadingView';
import { graphql, createQuery } from '../../api';
import ListPageHeader from '../ListPageHeader';

import { type ProgramListPageQuery } from './__generated__/ProgramListPageQuery.graphql';
import ProgramList from './ProgramListPageList';

const useQuery = createQuery<ProgramListPageQuery>(graphql`
  query ProgramListPageQuery($filter: ProgramFilterInput!) {
    ...ProgramListPageList_query @arguments(filter: $filter)
    userPrograms: programs(filter: { isPublic: null, tagId: null, ownerId: "me" }, first: 0) {
      edgeCount
    }
  }
`);

export default createDashboardPage<any>(function ProgramListPage(props) {
  const [search, searchInputProps] = useInputValue('');
  const { showUserPrograms } = props;

  const filter = React.useMemo(() => {
    if (!showUserPrograms) {
      return {
        search,
      };
    }

    return {
      search,
      isPublic: null,
      tagId: null,
      ownerId: 'me',
    };
  }, [search, showUserPrograms]);

  const query = useQuery({ filter });
  const programsPath = showUserPrograms ? 'myprograms' : 'programs';

  return (
    <>
      <DialogRoute
        path={`/dashboard/${programsPath}/new`}
        component={ProgramCreateDialog}
        cancelTo={`/dashboard/${programsPath}`}
        completeTo={(program) => `/dashboard/programs/view/${program.id}/update`}
      />
      <PageHelmet title="Programs" />
      <ListPageHeader
        searchBarProps={{
          placeholder: 'Search Programs',
          ...searchInputProps,
        }}
        actions={[
          {
            key: 'create',
            type: 'link',
            label: 'Create New Program',
            to: `/dashboard/${programsPath}/new`,
            primary: true,
          },
        ]}
      />
      <DashboardPageBody hideDownBreakpoint="xs">
        {!query.props ? <LoadingView /> : <ProgramList query={query.props} />}
      </DashboardPageBody>
    </>
  );
});
