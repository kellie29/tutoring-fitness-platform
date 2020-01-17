// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Duration } from 'luxon';
import { Typography } from '@material-ui/core';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import ModuleCalendar from '../ModuleCalendar';
import LoadingView from '../LoadingView';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramViewPageCalendarTabQuery } from './__generated__/ProgramViewPageCalendarTabQuery.graphql';

const useQuery = createQuery<ProgramViewPageCalendarTabQuery>(graphql`
  query ProgramViewPageCalendarTabQuery($programId: ID) {
    program(id: $programId) {
      ...ProgramDetailScreen_program
      id
      name
      description
      owner {
        ...PresentableLink_presentable
      }
      modules {
        id
        name
        description
        type
        data
      }
      duration
      viewerCanUpdate
    }
  }
`);

export default createDashboardPageTab<any>(function ProgramViewPageCalendarTab() {
  const match = useRouteMatch();

  const query = useQuery({
    programId: match.params.programId,
  });
  const program = query.props?.program || null;
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const onEventClick = React.useCallback(
    (event) => {
      // if (!selectedEvent || (event && event.id !== selectedEvent.id)) {
      if (
        !selectedEvent ||
        (event && event.programModuleData.id !== selectedEvent.programModuleData.id)
      ) {
        setSelectedEvent(event);
      } else {
        setSelectedEvent(null);
      }
    },
    [selectedEvent],
  );

  if (!query.props) {
    return <LoadingView />;
  }

  if (!program) {
    throw new Error('Not found');
  }

  const emulatable = selectedEvent
    ? { type: 'programModule', module: selectedEvent.programModuleData }
    : { type: 'programDetail', program };

  return (
    <MobileAppPreviewView emulatable={emulatable}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Typography
            variant="h6"
            style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '800' }}
          >
            Calendar
          </Typography>
        </div>
      </div>
      <div style={{ height: 16 }} />
      <ModuleCalendar
        // $FlowFixMe
        modules={program.modules}
        durationDays={Duration.fromISO(program.duration).as('days')}
        selectedEvent={selectedEvent}
        onEventClick={onEventClick}
      />
    </MobileAppPreviewView>
  );
});
