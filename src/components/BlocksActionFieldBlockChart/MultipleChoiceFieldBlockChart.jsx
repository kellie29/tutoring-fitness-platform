// @flow

import * as React from 'react';
import { DateTime, Interval } from 'luxon';
import {
  VerticalBarSeries,
  // YAxis,
  DiscreteColorLegend,
  Hint,
} from 'react-vis';
import { useTheme } from '@material-ui/core';

import DateTimePlot from '../EventProgressChart/DateTimePlot';

type Event = $ReadOnly<{
  startDate: string,
  response: number,
}>;

type Line = $ReadOnly<{
  events: $ReadOnlyArray<Event>,
  color: string,
  title: string,
}>;

type Props = {|
  lines: $ReadOnlyArray<Line>,
  interval: Interval,
|};

export default function MultipleChoiceFieldBlockChart(props: Props) {
  const { lines, interval } = props;

  const theme = useTheme();

  const days = interval.splitBy({ day: 1 }).map((i) => i.start);

  const lineData = lines.map((line, lineIndex) => {
    const { events } = line;

    return days.map((day) => {
      const dayEvents = events.filter((e) => DateTime.fromISO(e.startDate).hasSame(day, 'day'));

      return {
        x: day.toMillis(),
        y: dayEvents.filter((event) => event.response === lineIndex).length,
        line,
      };
    });
  });

  const [hoveredDatapoint, setHoveredDataPoint] = React.useState(null);

  const onValueMouseOver = React.useCallback((datapoint) => {
    setHoveredDataPoint(datapoint);
  }, []);

  const onValueMouseOut = React.useCallback(() => {
    setHoveredDataPoint(null);
  }, []);

  // const yDomain = [0, 10.5];

  return (
    <>
      <DiscreteColorLegend
        height={64}
        style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
        orientation="horizontal"
        items={lines}
      />

      <DateTimePlot
        interval={interval}
        // yDomain={yDomain}
        stackBy="y"
        noLeftMargin
      >
        {hoveredDatapoint && (
          <Hint
            value={hoveredDatapoint}
            align={{
              horizontal: 'left',
              vertical: 'auto',
            }}
            format={(dp) => [dp.line]}
            style={{ color: 'black' }}
          />
        )}
        {/* <YAxis /> */}
        {lineData.map((ld, i) => (
          <VerticalBarSeries
            key={i}
            data={ld}
            color={lines[i].color ?? theme.palette.primary.main}
            onValueMouseOver={onValueMouseOver}
            onValueMouseOut={onValueMouseOut}
          />
        ))}
      </DateTimePlot>
    </>
  );
}
