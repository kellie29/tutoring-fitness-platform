// @flow

import * as React from 'react';
import { DateTime, Interval, Duration } from 'luxon';
import { FlexibleXYPlot, XAxis, HorizontalGridLines } from 'react-vis';

type Props = {|
  interval: Interval,
  yDomain?: [number, number],
  stackBy?: 'y',
  noLeftMargin?: boolean,
  children: React.Node,
|};

export default function DateTimePlot(props: Props) {
  const { interval, yDomain, stackBy, noLeftMargin = false, children } = props;

  const days = interval.splitBy({ day: 1 }).map((i) => i.start);

  const xDomain = [
    days[0].toMillis(),
    days[days.length - 1].toMillis() + Duration.fromObject({ days: 0.5 }).as('milliseconds'),
  ];
  const xTickValues = days.map((d) => d.toMillis());

  return (
    <FlexibleXYPlot
      margin={{ left: !noLeftMargin ? 48 : 0, bottom: 36, right: 56 }}
      xDomain={xDomain}
      yDomain={yDomain}
      stackBy={stackBy}
    >
      <XAxis
        tickValues={xTickValues}
        tickFormat={(value) => DateTime.fromMillis(value).toFormat('MMM d')}
        // tickLabelAngle={-45}
      />
      <HorizontalGridLines />
      {children}
    </FlexibleXYPlot>
  );
}
