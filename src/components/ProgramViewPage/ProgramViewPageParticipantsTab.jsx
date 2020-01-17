// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { DateTime, Interval } from 'luxon';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import LoadingView from '../LoadingView';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramViewPageParticipantsTabQuery } from './__generated__/ProgramViewPageParticipantsTabQuery.graphql';
import ProgramViewPageParticipantsTabProgramTrackRow from './ProgramViewPageParticipantsTabProgramTrackRow';

const useQuery = createQuery<ProgramViewPageParticipantsTabQuery>(
  graphql`
    query ProgramViewPageParticipantsTabQuery(
      $programId: ID
      $eventsFilter: ProgramTrackEventFilterInput
    ) {
      program(id: $programId) {
        ...ProgramDetailScreen_program
        id
        tracks(first: 9999) {
          edgeCount
          edges {
            node {
              id
              ...ProgramViewPageParticipantsTabProgramTrackRow_programTrack
                @arguments(eventsFilter: $eventsFilter)
            }
          }
        }
        invitations(first: 1) {
          edges {
            node {
              id
              token
              firebaseShortLink
            }
          }
        }
      }
    }
  `,
  {
    fetchPolicy: 'network-only',
  },
);

export default createDashboardPageTab<any>(function ProgramViewPageParticipantsTab() {
  const match = useRouteMatch();

  const { eventsFilter, chartInterval } = React.useMemo(() => {
    const now = DateTime.utc();
    const interval = Interval.fromDateTimes(now.minus({ days: 6 }).startOf('day'), now);

    return {
      eventsFilter: {
        startDate: {
          after: interval.start.toISO(),
          before: interval.end.toISO(),
        },
      },
      chartInterval: interval,
    };
  }, []);
  const query = useQuery({
    programId: match.params.programId,
    eventsFilter,
  });
  const program = query.props?.program || null;

  if (!query.props) {
    return <LoadingView />;
  }

  if (!program) {
    throw new Error('Not found');
  }

  const emulatable = { type: 'programDetail', program };

  return (
    <MobileAppPreviewView emulatable={emulatable}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Typography
            variant="h6"
            style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '800' }}
          >
            Clients
          </Typography>
        </div>
      </div>
      <div style={{ height: 16 }} />
      <div>
        {/* TODO: Use edgeCount instead of edges.length */}
        {program.tracks.edges.length === 0 && (
          <div style={{ display: 'flex' }}>
            <Typography variant="body1">
              You don&apos;t have any clients yet.
              <br />
              <br />
              When a client accepts your invitation, you will be able to observe their progress
              here.
            </Typography>
          </div>
        )}
        <div>
          {program.tracks.edges.map(({ node: programTrack }) => (
            <ProgramViewPageParticipantsTabProgramTrackRow
              key={programTrack.id}
              programTrack={programTrack}
              chartInterval={chartInterval}
            />
          ))}
        </div>
      </div>
      <div style={{ height: 16 }} />
    </MobileAppPreviewView>
  );
});
