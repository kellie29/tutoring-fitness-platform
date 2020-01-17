// @flow

import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { DateTime, Interval } from 'luxon';

import createDashboardPage, { DashboardPageBody } from '../createDashboardPage';
import PageHelmet from '../PageHelmet';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';

import ClientProfileListSummary from './ClientProfileListSummary';
import { type HomePageQuery } from './__generated__/HomePageQuery.graphql';
import ContentCard from './ContentCard';
import NotificationListSummary from './NotificationListSummary';

const useQuery = createQuery<HomePageQuery>(graphql`
  query HomePageQuery($eventsFilter: ProgramTrackEventFilterInput) {
    ...ClientProfileListSummary_query @arguments(eventsFilter: $eventsFilter)
    ...NotificationListSummary_query
    userClientProfiles: clientProfiles(filter: { ownerId: "me" }, first: 0) {
      edgeCount
    }
  }
`);

export default createDashboardPage<any>(function HomePage() {
  const history = useHistory();

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
  const query = useQuery({ eventsFilter });

  if (!query.props) {
    return <LoadingView />;
  }

  const { userClientProfiles } = query.props;

  return (
    <>
      <PageHelmet title="Home" />
      <DashboardPageBody>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ textAlign: 'center' }}
        >
          <Grid item xs={12} md={6} xl={4}>
            <ContentCard
              title="Clients"
              {...(userClientProfiles.edgeCount >= 3
                ? {
                    onViewAll: () => {
                      history.push('/dashboard/clients');
                    },
                  }
                : undefined)}
            >
              {userClientProfiles.edgeCount ? (
                <ClientProfileListSummary
                  query={query.props}
                  progressInterval={progressInterval}
                  dailyProgressInterval={dailyProgressInterval}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    placeItems: 'center',
                    placeContent: 'center',
                  }}
                >
                  <Typography>When you invite your clients, they will be listed here.</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => history.push('/dashboard/clients/new')}
                  >
                    Invite a Client
                  </Button>
                </div>
              )}
            </ContentCard>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ContentCard
              title="Recent Activity"
              // {...(userNotifications.edgeCount >= 3
              //   ? {
              //       onViewAll: () => {
              //         history.push('/dashboard/notifications');
              //       },
              //     }
              //   : undefined)}
            >
              <NotificationListSummary query={query.props} />
            </ContentCard>
          </Grid>
        </Grid>
      </DashboardPageBody>
    </>
  );
});
