// @flow

import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { DateTime, Duration } from 'luxon';
import invariant from 'invariant';

import createDashboardPageTab from '../createDashboardPageTab';
import { graphql, createQuery } from '../../api';
import EventCalendar, { eventCalendarEventToProgramModuleDataEvent } from '../EventCalendar';
import LoadingView from '../LoadingView';
import MobileAppPreviewView from '../MobileAppPreviewView';

import { type ProgramTrackViewPageCalendarTabQuery } from './__generated__/ProgramTrackViewPageCalendarTabQuery.graphql';

const useQuery = createQuery<ProgramTrackViewPageCalendarTabQuery>(graphql`
  query ProgramTrackViewPageCalendarTabQuery($programTrackId: ID) {
    programTrack(id: $programTrackId) {
      id
      startDate
      events {
        edges {
          node {
            id
            name
            startDate
            endDate
            action {
              id
              name
              description
              data
            }
            actionResponses(first: 1) {
              edges {
                node {
                  response
                }
              }
            }
          }
        }
      }
      program {
        ...ProgramTrackInvitationScreen_program
        duration
        modules {
          id
          type
          name
          description
          data
        }
      }
    }
  }
`);

export default createDashboardPageTab<any>(function ProgramTrackViewPageCalendarTab() {
  const match = useRouteMatch();

  const query = useQuery({
    programTrackId: match.params.programTrackId,
  });
  const programTrack = query.props?.programTrack || null;
  const [selectedEvent, setSelectedEvent] = React.useState(undefined);

  const onEventClick = React.useCallback(
    (event) => {
      if (!selectedEvent || (event && event.id !== selectedEvent.id)) {
        setSelectedEvent(event);
      } else {
        setSelectedEvent(null);
      }
    },
    [selectedEvent],
  );

  const calendarEvents = programTrack
    ? programTrack.events.edges
        .flatMap(({ node: event }) => ({
          ...event,
          response: event.actionResponses.edges.length
            ? event.actionResponses.edges[0].node.response
            : null,
        }))
        .sort(
          (a, b) =>
            DateTime.fromISO(b.startDate).toMillis() - DateTime.fromISO(a.startDate).toMillis(),
        )
    : null;

  React.useLayoutEffect(() => {
    if (!query.props || selectedEvent !== undefined) {
      return;
    }
    invariant(calendarEvents, 'Expected "calendarEvents"');

    const lastEventWithResponse = [...calendarEvents].find(
      (calendarEvent) => calendarEvent.response,
    );
    if (lastEventWithResponse) {
      setSelectedEvent(eventCalendarEventToProgramModuleDataEvent(lastEventWithResponse));
    } else {
      setSelectedEvent(
        eventCalendarEventToProgramModuleDataEvent(calendarEvents[calendarEvents.length - 1]),
      );
    }
  }, [calendarEvents, query.props, selectedEvent]);

  if (!query.props) {
    return <LoadingView />;
  }

  if (!programTrack) {
    throw new Error('Not found');
  }
  invariant(calendarEvents, 'Expected "calendarEvents"');

  const selectedEventResponse =
    selectedEvent &&
    // $FlowFixMe
    programTrack.events.edges.find(({ node: event }) => event.id === selectedEvent.id)?.node
      .actionResponses.edges[0]?.node.response;

  const emulatable = selectedEvent
    ? {
        type: 'programModule',
        module: selectedEvent.programModuleData,
        response: selectedEventResponse,
      }
    : null;

  return (
    <MobileAppPreviewView emulatable={emulatable} noHeader showSaveButton={false}>
      <EventCalendar
        startDate={DateTime.fromISO(programTrack.startDate)}
        events={calendarEvents}
        durationDays={Duration.fromISO(programTrack.program.duration).as('days')}
        selectedEvent={selectedEvent}
        noAllSelect
        onEventClick={onEventClick}
      />
    </MobileAppPreviewView>
  );
});
