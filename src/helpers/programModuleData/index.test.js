// @flow

import { DateTime } from 'luxon';

import { programModuleDataFactory, programModuleDataToEvents } from '.';

test('programModuleDataToEvents() works', () => {
  const programModuleData = programModuleDataFactory.create(
    'generic',
    {
      scheduling: {
        startDay: 1,
        startTime: 9 * 60 * 60 * 1000,
        recurrenceFrequency: 'daily',
        recurOnDays: [],
        recurrenceInterval: 1,
        recurrenceEnd: 'never',
        recurrenceEndOnDay: 1,
        recurrenceEndAfterAmount: 1,
        configuration: {
          noNotifications: false,
          eventsViewableBeforeStartDate: false,
        },
      },
      action: {
        type: 'multiStep',
        steps: [
          {
            name: 'title',
            action: {
              type: 'blocks',
              blocks: [],
            },
          },
        ],
      },
    },
    { id: 'test', name: 'test' },
  );

  const options = {
    startDate: DateTime.fromISO('2019-06-10T21:21:10.219+03:00').setZone('utc'),
    endDate: DateTime.fromISO('2019-06-10T21:21:10.219+03:00').setZone('utc'),
  };
  const events = programModuleDataToEvents(options, programModuleData);

  expect(events).toMatchSnapshot();
});
