// @flow

import * as React from 'react';
import { DateTime } from 'luxon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import range from 'lodash/range';
import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { type ProgramModuleDataEvent } from '../../helpers/programModuleData';

import EventChip from './EventChip';
import CalendarCell from './CalendarCell';

const CalendarGrid = styled('div')(() => ({
  display: 'grid',
  border: '1px solid rgba(221, 221, 221, 0.50)',
  gridTemplateColumns: 'repeat(7, 1fr)',
}));

type Event = {
  id: string,
  name: string,
  startDate: string,
  endDate: string,
  action: any,
  response: string | null,
};

type Props = {|
  startDate?: DateTime | null,
  durationDays: number,
  events: $ReadOnlyArray<Event>,
  selectedEvent?: ProgramModuleDataEvent | null,
  noAllSelect?: boolean,
  onEventClick?: (event: ProgramModuleDataEvent) => void,
|};

export const eventCalendarEventToProgramModuleDataEvent = (event: Event) => ({
  id: event.id,
  title: event.name,
  start: DateTime.fromISO(event.startDate),
  end: DateTime.fromISO(event.endDate),
  programModuleData: {
    id: event.action.id,
    // $FlowFixMe
    type: 'action',
    name: event.action.name,
    // $FlowFixMe
    data: {
      action: event.action.data,
    },
  },
});

export default function EventCalendar(props: Props) {
  const {
    startDate: propsStartDate = null,
    events,
    durationDays,
    onEventClick,
    selectedEvent,
    noAllSelect = false,
  } = props;

  const hasPropsStartDate = Boolean(propsStartDate);
  const [startDate, setStartDate] = React.useState(propsStartDate || DateTime.local());
  const [usingStartDate, setUsingStartDate] = React.useState(hasPropsStartDate);

  const onStartDateChange = React.useCallback((event) => {
    setStartDate(DateTime.fromFormat(event.target.value, 'yyyy-MM-dd'));
  }, []);

  const endDate = startDate.plus({ days: durationDays });
  const moduleEvents: $ReadOnlyArray<ProgramModuleDataEvent> = events.map((event) =>
    eventCalendarEventToProgramModuleDataEvent(event),
  );

  const setUseStartDate = () => {
    setUsingStartDate(!usingStartDate);
  };

  const dayNumbers = range(1, durationDays + 1);

  const startOfWeek = startDate.startOf('week');
  const diff = startDate.diff(startOfWeek, 'days');
  const pad = Math.floor(diff.days);

  const endOfWeek = endDate.endOf('week');
  const endDiff = endDate.diff(endOfWeek, 'days');
  const endPad = Math.floor(endDiff.days);

  return (
    <>
      {!hasPropsStartDate && (
        <>
          {usingStartDate ? (
            <div syle={{ display: 'flex', flexDirection: 'column' }}>
              <Button style={{ flex: 1 }} variant="contained" onClick={() => setUseStartDate()}>
                Hide Start Date
              </Button>
              <div style={{ flex: 1, paddingTop: 24 }}>
                <TextField
                  id="date"
                  label="If Starting On"
                  type="date"
                  value={startDate.toFormat('yyyy-MM-dd')}
                  onChange={onStartDateChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </div>
            </div>
          ) : (
            <Button variant="contained" onClick={() => setUseStartDate()}>
              Show Start Date
            </Button>
          )}
        </>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 24, overflow: 'hidden' }}>
        {usingStartDate ? (
          <div style={{ display: 'flex' }}>
            {range(0, 7).map((day) => {
              return (
                <div
                  key={`day-${day}`}
                  style={{
                    border: '1px solid rgba(221, 221, 221, 0.50)',
                    flex: 1,
                    textAlign: 'center',
                    padding: 8,
                    backgroundColor: '#96ACCF',
                  }}
                >
                  <Typography style={{ color: '#ffffff', fontWeight: '800' }}>
                    {startDate.plus({ days: day - pad }).toFormat('EEE')}
                  </Typography>
                </div>
              );
            })}
          </div>
        ) : null}
        <CalendarGrid>
          {usingStartDate &&
            range(pad, 0).map((padNum) => (
              <CalendarCell
                key={`startPad-${padNum}`}
                variant={usingStartDate ? 'absolute' : 'relative'}
                startDate={startDate}
                day={-padNum}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgb(202, 212, 226)',
                  }}
                />
              </CalendarCell>
            ))}
          {dayNumbers.map((dayNumber) => (
            <CalendarCell
              key={`day-${dayNumber}`}
              variant={usingStartDate ? 'absolute' : 'relative'}
              startDate={startDate}
              day={dayNumber - 1}
            >
              {moduleEvents
                .filter((event) =>
                  startDate.plus({ days: dayNumber - 1 }).hasSame(event.start, 'day'),
                )
                // $FlowFixMe
                .sort((a, b) => a.start - b.start)
                .map((event) => {
                  const anEvent = events.find((anEvent1) => anEvent1.id === event.id);
                  return (
                    <EventChip
                      key={event.id}
                      colorIndex={
                        // eslint-disable-next-line no-nested-ternary
                        anEvent?.response
                          ? 2
                          : event.start.toMillis() > DateTime.local().toMillis()
                          ? 1
                          : 0
                      }
                      event={event}
                      selected={
                        // eslint-disable-next-line no-nested-ternary
                        selectedEvent
                          ? !noAllSelect
                            ? event.programModuleData.id === selectedEvent.programModuleData.id
                            : event.id === selectedEvent.id
                          : false
                      }
                      onClick={() => onEventClick && onEventClick(event)}
                    />
                  );
                })}
            </CalendarCell>
          ))}
          {usingStartDate &&
            range(0, endPad).map((padNum) => (
              <CalendarCell
                key={`endPad-${padNum}`}
                variant={usingStartDate ? 'absolute' : 'relative'}
                startDate={startDate}
                day={durationDays + padNum}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgb(202, 212, 226)',
                  }}
                />
              </CalendarCell>
            ))}
        </CalendarGrid>
      </div>
    </>
  );
}
