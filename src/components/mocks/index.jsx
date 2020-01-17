import * as React from 'react';
import { Interval } from 'luxon';

import EventDailyProgressChart from '../EventDailyProgressChart';
import NumberFieldBlockChart from '../BlocksActionFieldBlockChart/NumberFieldBlockChart';

const propsChart1 = {
  interval: Interval.fromISO('2019-11-13T00:00:00.000Z/2019-11-19T14:07:02.982Z'),
  lines: [
    {
      events: [
        { startDate: '2019-11-19T09:00:00.000Z', hasResponse: false },
        { startDate: '2019-11-18T09:00:00.000Z', hasResponse: false },
        { startDate: '2019-11-17T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-14T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-16T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-15T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-13T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-17T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-19T09:00:00.000Z', hasResponse: false },
        { startDate: '2019-11-18T09:00:00.000Z', hasResponse: false },
        { startDate: '2019-11-16T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-14T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-15T09:00:00.000Z', hasResponse: true },
        { startDate: '2019-11-13T09:00:00.000Z', hasResponse: true },
      ],
    },
  ],
};

const propsChart2 = {
  interval: Interval.fromISO('2019-11-13T00:00:00.000Z/2019-11-19T14:07:02.982Z'),
  lines: [
    {
      events: [
        { startDate: '2019-11-16T09:00:00.000Z', response: 90 },
        { startDate: '2019-11-17T09:00:00.000Z', response: 85 },
        { startDate: '2019-11-14T09:00:00.000Z', response: 80 },
        { startDate: '2019-11-15T09:00:00.000Z', response: 80 },
        { startDate: '2019-11-13T09:00:00.000Z', response: 85 },
      ],
    },
  ],
};

const mockedComponents = {
  EventDailyProgressChart,
  NumberFieldBlockChart,
};

const mockedProps = {
  EventDailyProgressChart: propsChart1,
  NumberFieldBlockChart: propsChart2,
};

// eslint-disable-next-line import/prefer-default-export
export const getMockedComponents = (component) =>
  React.createElement(mockedComponents[component], mockedProps[component], null);
