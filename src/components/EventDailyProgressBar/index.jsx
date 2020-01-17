// @flow

import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { DateTime, Interval } from 'luxon';
import { useTheme } from '@material-ui/styles';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(0.5),
//   },
// }));

type Event = $ReadOnly<{
  startDate: string,
  hasResponse: boolean,
}>;

type Props = {|
  events: $ReadOnlyArray<Event>,
  interval: Interval,
|};

export default function EventDailyProgressBar(props: Props) {
  const { events, interval } = props;

  // const classes = useStyles();
  const theme = useTheme();

  const days = interval.splitBy({ day: 1 }).map((i) => i.start);

  return (
    <div style={{ display: 'flex', userSelect: 'none' }}>
      {days.map((day, i) => {
        const isDayStartOfTheWeek = day.hasSame(day.startOf('week'), 'day');
        const dayEvents = events.filter((e) => DateTime.fromISO(e.startDate).hasSame(day, 'day'));
        const respondedEvents = dayEvents.filter((e) => e.hasResponse);

        const hasEvents = !!dayEvents.length;
        const unrespondedEventCount = dayEvents.length - respondedEvents.length;

        let color = theme.palette.text.primary;
        if (hasEvents) {
          // eslint-disable-next-line no-nested-ternary
          color = unrespondedEventCount
            ? respondedEvents.length
              ? '#f48e36'
              : theme.palette.error.main
            : theme.palette.primary.main;
        }

        return (
          <div
            key={day.toISO()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              placeItems: 'center',
              border: `0 solid ${theme.palette.divider}`,
              borderLeftWidth: i > 0 && isDayStartOfTheWeek ? 1 : 0,
              padding: '4px 4px',
              width: 26,
            }}
          >
            <span style={{ fontSize: 10, marginBottom: 4 }}>
              {day.toLocaleString({ weekday: 'narrow' })}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color,
              }}
            >
              {!hasEvents ? '•' : unrespondedEventCount || '✓'}
            </span>
          </div>
        );
      })}
    </div>
  );
}
