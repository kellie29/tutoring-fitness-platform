// @flow

import * as React from 'react';
import { DateTime, Interval } from 'luxon';
import { LineMarkSeries, YAxis } from 'react-vis';
import { useTheme } from '@material-ui/core';

import DateTimePlot from '../EventProgressChart/DateTimePlot';

const curve = 'curveMonotoneX';

type Event = $ReadOnly<{
  startDate: string,
  hasResponse: boolean,
}>;

type Line = $ReadOnly<{
  events: $ReadOnlyArray<Event>,
}>;

type Props = {|
  lines: $ReadOnlyArray<Line>,
  interval: Interval,
|};

export default function EventDailyProgressChart(props: Props) {
  const { lines, interval } = props;

  const theme = useTheme();

  const days = interval.splitBy({ day: 1 }).map((i) => i.start);

  const lineData = lines.map((line) => {
    const { events } = line;

    return days.map((day) => {
      const dayEvents = events.filter((e) => DateTime.fromISO(e.startDate).hasSame(day, 'day'));

      return {
        x: day.toMillis(),
        y: !dayEvents.length ? 0 : dayEvents.filter((e) => e.hasResponse).length / dayEvents.length,
      };
    });
  });

  const yMax = Math.max(...lineData.map((ld) => Math.max(...ld.map(({ y }) => y))));
  const yDomain = [0, yMax + 0.5];
  const yTickValues = [0, 0.4, Math.round(yMax)];

  return (
    <DateTimePlot interval={interval} yDomain={yDomain}>
      <YAxis
        tickValues={yTickValues}
        tickFormat={(value) => (value !== 0 ? `${value * 100}%` : '')}
      />
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
