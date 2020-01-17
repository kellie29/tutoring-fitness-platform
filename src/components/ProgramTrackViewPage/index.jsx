// @flow

import * as React from 'react';
import { type ContextRouter, Switch, Route } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { DateTime } from 'luxon';
import invariant from 'invariant';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import createDashboardPage from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import PresentableAvatar from '../PresentableAvatar';
import PresentableLink from '../PresentableLink';
import ReminderModuleIcon from '../icons/ReminderModuleIcon';
import ActionModuleIcon from '../icons/ActionModuleIcon';
import ViewPageHeader from '../ViewPageHeader';
import NodeDeleteDialog from '../NodeDeleteDialog';
import { EmulatorStateProvider } from '../MobileAppEmulator';
import DialogRoute from '../DialogRoute';

import { type ProgramTrackViewPageQuery } from './__generated__/ProgramTrackViewPageQuery.graphql';
// import ProgramTrackEventRow from './ProgramTrackEventRow';
import ProgramTrackViewPageOverviewTab from './ProgramTrackViewPageOverviewTab';
import ProgramTrackViewPageActionLogTab from './ProgramTrackViewPageActionLogTab';
import ProgramTrackViewPageCalendarTab from './ProgramTrackViewPageCalendarTab';

const useQuery = createQuery<ProgramTrackViewPageQuery>(graphql`
  query ProgramTrackViewPageQuery(
    $programTrackId: ID
    $trackEventsFilter: ProgramTrackEventFilterInput!
  ) {
    programTrack(id: $programTrackId) {
      id
      name
      image {
        url
      }
      program {
        ...PresentableAvatar_presentable
        id
        name
      }
      user {
        ...PresentableLink_presentable
        id
        name
      }
      events(filter: $trackEventsFilter) {
        edges {
          node {
            id
            ...ProgramTrackEventRow_programTrackEvent
          }
        }
      }
      actions {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`);

type Props = {
  ...ContextRouter,
};

export default createDashboardPage<any>(function ProgramTrackViewPage(props: Props) {
  const { match } = props;
  const { programTrackId, clientProfileId } = match.params;
  invariant(programTrackId, 'Expected "programTrackId"');

  const [before] = React.useState(DateTime.local());

  const query = useQuery({
    programTrackId,
    trackEventsFilter: {
      startDate: {
        before,
      },
    },
  });
  const programTrack = query.props?.programTrack;

  if (query.props && !programTrack) {
    throw new Error('Not found');
  }

  return (
    <>
      {programTrack && (
        <DialogRoute
          path={`${match.path}/delete`}
          component={NodeDeleteDialog}
          componentProps={{
            nodeId: programTrack.id,
          }}
          cancelTo={match.url}
          completeTo={
            clientProfileId
              ? `/dashboard/clients/view/${clientProfileId}`
              : `/dashboard/programs/view/${programTrack.program.id}`
          }
        />
      )}
      <PageHelmet title={programTrack ? programTrack.name : ''} />
      {programTrack && (
        <>
          <ViewPageHeader
            leftContent={
              <PresentableAvatar presentable={programTrack.program} style={{ marginRight: 16 }} />
            }
            titleContent={
              <>
                {programTrack.program.name}
                {/* <ProgramIcon style={{ marginRight: 8 }} /> {program.name} */}
              </>
            }
            subtitleContent={
              programTrack.user ? (
                <>
                  track for <PresentableLink presentable={programTrack.user} />
                </>
              ) : null
            }
            tabs={[
              {
                order: 2,
                label: 'Activity Log',
                icon: <ActionModuleIcon />,
                to: `${match.url}/actions`,
              },
              {
                order: 0,
                label: 'Calendar',
                icon: <ReminderModuleIcon />,
                to: `${match.url}/calendar`,
              },
              {
                order: 1,
                label: 'Progress',
                icon: <ShowChartIcon />,
                to: `${match.url}`,
              },
            ]}
            actions={[
              ...(clientProfileId
                ? [
                    {
                      key: 'delete',
                      underMenu: true,
                      type: 'link',
                      label: 'Delete',
                      to: `${match.url}/delete`,
                    },
                  ]
                : []),
            ]}
            // backButtonTo={
            //   clientProfileId
            //     ? `/dashboard/clients/view/${clientProfileId}/programs`
            //     : undefined
            // }
            backButtonTo={
              clientProfileId ? `/dashboard/clients/view/${clientProfileId}` : undefined
            }
          />
          <EmulatorStateProvider>
            <Switch>
              <Route path={`${match.path}/actions`} component={ProgramTrackViewPageActionLogTab} />
              <Route path={`${match.path}/calendar`} component={ProgramTrackViewPageCalendarTab} />
              <Route path={`${match.path}`} component={ProgramTrackViewPageOverviewTab} />
            </Switch>
          </EmulatorStateProvider>
        </>
      )}
    </>
  );
});
