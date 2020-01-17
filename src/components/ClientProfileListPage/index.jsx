// @flow

import * as React from 'react';
import { DateTime, Interval } from 'luxon';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import useInputValue from '../useInputValue';
import LoadingView from '../LoadingView';
import { graphql, createQuery } from '../../api';
import ListPageHeader from '../ListPageHeader';
import ClientProfileCreateDialog from '../ClientProfileCreateDialog';
import DialogRoute from '../DialogRoute';

import { type ClientProfileListPageQuery } from './__generated__/ClientProfileListPageQuery.graphql';
import ClientProfileList from './ClientProfileList';
import NoContentView from './NoContentView';

const useQuery = createQuery<ClientProfileListPageQuery>(graphql`
  query ClientProfileListPageQuery(
    $filter: ClientProfileFilterInput
    $eventsFilter: ProgramTrackEventFilterInput
  ) {
    ...ClientProfileList_query @arguments(filter: $filter, eventsFilter: $eventsFilter)
    userClientProfiles: clientProfiles(filter: { ownerId: "me" }, first: 0) {
      edgeCount
    }
  }
`);

export default createDashboardPage<any>(function ClientProfileListPage() {
  const [search, searchInputProps] = useInputValue('');
  const filter = React.useMemo(() => ({ search, ownerId: 'me' }), [search]);
  const { eventsFilter, progressInterval, dailyProgressInterval } = React.useMemo(() => {
    const now = DateTime.utc();
    // eslint-disable-next-line no-shadow
    const progressInterval = Interval.fromDateTimes(now.startOf('week'), now.endOf('day'));
    // eslint-disable-next-line no-shadow
    const dailyProgressInterval = Interval.fromDateTimes(
      now.minus({ days: 6 }).startOf('day'),
      now,
    );
    const eventInterval = progressInterval.union(dailyProgressInterval);

    return {
      eventsFilter: {
        startDate: {
          after: eventInterval.start.toISO(),
          before: eventInterval.end.toISO(),
        },
      },
      progressInterval,
      dailyProgressInterval,
    };
  }, []);
  const query = useQuery({
    filter,
    eventsFilter,
  });

  return (
    <>
      <DialogRoute
        path="/dashboard/clients/new"
        component={ClientProfileCreateDialog}
        cancelTo="/dashboard/clients"
        completeTo={(clientProfile) => `/dashboard/clients/view/${clientProfile.id}`}
      />
      <PageHelmet title="Clients" />
      {query.props && query.props.userClientProfiles.edgeCount === 0 ? (
        <DashboardPageBody hideDownBreakpoint="xs">
          <NoContentView />
        </DashboardPageBody>
      ) : (
        <>
          <ListPageHeader
            searchBarProps={{
              placeholder: 'Search Clients',
              ...searchInputProps,
            }}
            actions={[
              {
                key: 'create',
                type: 'link',
                label: 'Create New Client',
                to: '/dashboard/clients/new',
                primary: true,
              },
            ]}
          />
          <DashboardPageBody hideDownBreakpoint="xs">
            {!query.props ? (
              <LoadingView />
            ) : (
              <ClientProfileList
                query={query.props}
                showStats
                progressInterval={progressInterval}
                dailyProgressInterval={dailyProgressInterval}
              />
            )}
          </DashboardPageBody>
        </>
      )}
    </>
  );
});
