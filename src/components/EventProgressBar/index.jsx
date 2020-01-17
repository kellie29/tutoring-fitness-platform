// @flow

import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { DateTime, Interval } from 'luxon';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(0.5),
//   },
// }));

type Event = $ReadOnly<{
  startDate: string,
  hasResponse: boolean,
}>;

type Props = {
  events: $ReadOnlyArray<Event>,
  interval: Interval,
};

export default function EventProgressBar(props: Props) {
  const { events, interval } = props;

  // const classes = useStyles();

  const intervalEvents = events.filter((e) => interval.contains(DateTime.fromISO(e.startDate)));
  const completion = intervalEvents.length
    ? intervalEvents.filter((pe) => pe.hasResponse).length / intervalEvents.length
    : 0;

  return (
    <LinearProgress
      variant="determinate"
      value={completion * 100}
      style={{ width: 120, height: 8 }}
    />
  );
}
