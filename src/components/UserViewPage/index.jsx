// @flow

import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import InfoIcon from '@material-ui/icons/Info';

import createDashboardPage from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import PresentableViewPageHeader from '../PresentableViewPageHeader';

import { type UserViewPageQuery } from './__generated__/UserViewPageQuery.graphql';
import UserViewPageTracksTab from './UserViewPageTracksTab';

const useQuery = createQuery<UserViewPageQuery>(graphql`
  query UserViewPageQuery($userId: ID) {
    user(id: $userId) {
      ...PresentableViewPageHeader_presentable
      id
      name
      tracks(first: 10) {
        edges {
          node {
            ...ProgramTrackRow_programTrack
            id
          }
        }
      }
    }
  }
`);

export default createDashboardPage<any>(function UserViewPage() {
  const match = useRouteMatch();

  const query = useQuery({
    userId: match.params.userId,
  });
  const user = query.props?.user;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!user) {
    throw new Error('Not found');
  }

  return (
    <>
      <PageHelmet title={user.name} />
      <PresentableViewPageHeader
        presentable={user}
        // tabs={[
        //   {
        //     order: 1,
        //     label: 'Calendar',
        //     icon: <CalendarTodayIcon />,
        //     to: `/dashboard/users/view/${user.id}/calendar`,
        //   },
        //   {
        //     order: 0,
        //     label: 'Tracks',
        //     icon: <InfoIcon />,
        //     to: `/dashboard/users/view/${user.id}`,
        //   },
        // ]}
      />
      <Switch>
        {/* <Route
          path="/dashboard/users/view/:userId/calendar"
          component={UserViewPageCalendarTab}
        /> */}
        <Route path="/dashboard/users/view/:userId" component={UserViewPageTracksTab} />
      </Switch>
    </>
  );
});
