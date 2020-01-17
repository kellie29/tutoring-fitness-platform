// @flow

import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InfoIcon from '@material-ui/icons/Info';

import createDashboardPage from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import PresentableViewPageHeader from '../PresentableViewPageHeader';
import NodeDeleteDialog from '../NodeDeleteDialog';
import ProgramTrackCreateDialog from '../ProgramTrackCreateDialog';
import DialogRoute from '../DialogRoute';

import { type ClientProfileViewPageQuery } from './__generated__/ClientProfileViewPageQuery.graphql';
import ClientProfileViewPageOverviewTab from './ClientProfileViewPageOverviewTab';
import ClientProfileViewPageCalendarTab from './ClientProfileViewPageCalendarTab';
import ClientProfileViewPageProgramListTab from './ClientProfileViewPageProgramListTab';

const useQuery = createQuery<ClientProfileViewPageQuery>(graphql`
  query ClientProfileViewPageQuery($clientProfileId: ID) {
    clientProfile(id: $clientProfileId) {
      ...PresentableViewPageHeader_presentable
      id
      name
      viewerCanUpdate
    }
  }
`);

export default createDashboardPage<any>(function ClientProfileViewPage() {
  const match = useRouteMatch();

  const query = useQuery({
    clientProfileId: match.params.clientProfileId,
  });
  const clientProfile = query.props?.clientProfile;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!clientProfile) {
    throw new Error('Not found');
  }

  return (
    <>
      <DialogRoute
        path={`${match.path}/delete`}
        component={NodeDeleteDialog}
        componentProps={{
          nodeId: clientProfile.id,
        }}
        cancelTo={match.url}
        completeTo="/dashboard/clients"
      />
      <DialogRoute
        path="/dashboard/clients/view/:clientProfileId/new-program"
        component={ProgramTrackCreateDialog}
        cancelTo={`/dashboard/clients/view/${clientProfile.id}`}
        completeTo={(programTrack) =>
          `/dashboard/clients/view/${clientProfile.id}/tracks/view/${programTrack.id}`
        }
      />
      <PageHelmet title={clientProfile.name} />
      <PresentableViewPageHeader
        presentable={clientProfile}
        backButtonTo="/dashboard/clients/"
        tabs={[
          // {
          //   order: 2,
          //   label: 'Calendar',
          //   icon: <CalendarTodayIcon />,
          //   to: `/dashboard/clients/view/${clientProfile.id}/calendar`,
          // },
          // {
          //   order: 1,
          //   label: 'Programs',
          //   icon: <InfoIcon />,
          //   to: `/dashboard/clients/view/${clientProfile.id}/programs`,
          // },
          {
            order: 0,
            label: 'Overview',
            icon: <InfoIcon />,
            to: `/dashboard/clients/view/${clientProfile.id}`,
          },
        ]}
        actions={[
          {
            key: 'assign',
            type: 'link',
            label: 'Fast Assign',
            to: `/dashboard/clients/view/${clientProfile.id}/new-program`,
            primary: true,
          },
          {
            key: 'browse',
            type: 'link',
            label: 'Browse Programs',
            to: `/dashboard/programs`,
            primary: true,
          },
          ...(clientProfile.viewerCanUpdate
            ? [
                {
                  key: 'delete',
                  underMenu: true,
                  type: 'link',
                  label: 'Delete',
                  to: `/dashboard/clients/view/${clientProfile.id}/delete`,
                },
              ]
            : []),
        ]}
      />
      <Switch>
        <Route
          path="/dashboard/clients/view/:clientProfileId/calendar"
          component={ClientProfileViewPageCalendarTab}
        />
        <Route
          path="/dashboard/clients/view/:clientProfileId/programs"
          component={ClientProfileViewPageProgramListTab}
        />
        <Route
          path="/dashboard/clients/view/:clientProfileId"
          component={ClientProfileViewPageOverviewTab}
        />
      </Switch>
    </>
  );
});
