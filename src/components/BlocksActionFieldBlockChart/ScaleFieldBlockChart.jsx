// @flow

import * as React from 'react';
import { DateTime, Interval } from 'luxon';
import { LineMarkSeries, YAxis } from 'react-vis';
import { useTheme } from '@material-ui/core';

import DateTimePlot from '../EventProgressChart/DateTimePlot';

const curve = 'curveMonotoneX';

type Event = $ReadOnly<{
  startDate: string,
  response: number,
}>;

type Line = $ReadOnly<{
  events: $ReadOnlyArray<Event>,
}>;

type Props = {|
  lines: $ReadOnlyArray<Line>,
  interval: Interval,
|};

export default function ScaleFieldBlockChart(props: Props) {
  const { lines, interval } = props;

  const theme = useTheme();

  const days = interval.splitBy({ day: 1 }).map((i) => i.start);

  const lineData = lines.map((line) => {
    const { events } = line;

    return days.flatMap((day) => {
      const dayEvents = events.filter((e) => DateTime.fromISO(e.startDate).hasSame(day, 'day'));

      if (!dayEvents.length) return [];

      return [
        {
          x: day.toMillis(),
          y: !dayEvents.length
            ? 0
            : dayEvents.reduce((s, event) => s + event.response, 0) / dayEvents.length,
        },
      ];
    });
  });

  const yDomain = [0, 10.5];

  return (
    <DateTimePlot interval={interval} yDomain={yDomain}>
      <YAxis />
      {lineData.map((ld, i) => (
        <LineMarkSeries
          key={i}
          data={ld}
          size={3}
          color={theme.palette.primary.main}
          curve={curve}
        />
      ))}
    </DateTimePlot>
  );
}
