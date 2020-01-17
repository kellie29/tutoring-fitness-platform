// @flow

import * as React from 'react';
import invariant from 'invariant';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import ToggleButton from '@material-ui/lab/ToggleButton';
import { Duration } from 'luxon';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import {
  type GenericProgramModuleDataScheduling,
  initialGenericProgramModuleDataScheduling,
} from '../../helpers/programModuleData';

type Props = {|
  data: GenericProgramModuleDataScheduling | null,
  onChange: (data: GenericProgramModuleDataScheduling | null) => void,
|};

export default function GenericProgramModuleDataSchedulingEditor(props: Props) {
  const { data, onChange } = props;

  const onStartDayChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        startDay: Number.parseInt(event.target.value, 10),
      });
    },
    [data, onChange],
  );

  const onStartTimeChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');

      const [hours, minutes] = (event.target.value || '00:00')
        .split(':')
        .map((string) => Number.parseInt(string, 10));

      onChange({
        ...data,
        startTime: Duration.fromObject({ hours, minutes }).as('milliseconds'),
      });
    },
    [data, onChange],
  );

  const onRecurrenceFrequencyChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        recurrenceFrequency: event.target.value,
      });
    },
    [data, onChange],
  );

  // const onRecurOnDaysChange = React.useCallback(
  //   (event, recurOnDays) => {
  //     invariant(data, 'Expected "data"');
  //     onChange({
  //       ...data,
  //       recurOnDays,
  //     });
  //   },
  //   [data, onChange],
  // );

  const onRecurrenceIntervalChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        recurrenceInterval: Number.parseInt(event.target.value, 10),
      });
    },
    [data, onChange],
  );

  const onRecurrenceEndChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        recurrenceEnd: event.target.value,
      });
    },
    [data, onChange],
  );

  const onRecurrenceEndOnDayChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        recurrenceEndOnDay: Number.parseInt(event.target.value, 10),
      });
    },
    [data, onChange],
  );

  const onRecurrenceEndAfterAmountChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        recurrenceEndAfterAmount: Number.parseInt(event.target.value, 10),
      });
    },
    [data, onChange],
  );

  const onScheduleChange = React.useCallback(
    (event) => {
      const { checked } = event.target;
      const nextData = checked ? initialGenericProgramModuleDataScheduling : null;
      onChange(nextData);
    },
    [onChange],
  );

  const onNoNotificationsChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        configuration: {
          ...data.configuration,
          noNotifications: event.target.checked,
        },
      });
    },
    [data, onChange],
  );

  const onEventsViewableBeforeStartDateChange = React.useCallback(
    (event) => {
      invariant(data, 'Expected "data"');
      onChange({
        ...data,
        configuration: {
          ...data.configuration,
          eventsViewableBeforeStartDate: event.target.checked,
        },
      });
    },
    [data, onChange],
  );

  if (!data && data !== null) {
    onChange(initialGenericProgramModuleDataScheduling);
    return null;
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <FormControlLabel
          label="Schedule"
          control={<Checkbox checked={!!data} onChange={onScheduleChange} color="primary" />}
        />
      </div>
      {data && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <TextField
              label="Remind on Day"
              type="number"
              value={String(data.startDay)}
              onChange={onStartDayChange}
              style={{ width: 200 }}
            />
            <div style={{ width: 8 }} />
            <TextField
              label="Remind on Time"
              type="time"
              value={Duration.fromMillis(data.startTime).toFormat('hh:mm')}
              onChange={onStartTimeChange}
              style={{ width: 200 }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <FormControl style={{ width: 200 }}>
              <InputLabel htmlFor="recurrence-frequency">Recurrence Frequency</InputLabel>
              <NativeSelect
                value={data.recurrenceFrequency}
                onChange={onRecurrenceFrequencyChange}
                inputProps={{
                  name: 'recurrence-frequency',
                  id: 'recurrence-frequency',
                }}
              >
                <option value="never">Never</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </NativeSelect>
            </FormControl>
            {data.recurrenceFrequency !== 'never' && (
              <>
                <div style={{ width: 8 }} />
                <TextField
                  label="Recurrence Interval"
                  type="number"
                  value={String(data.recurrenceInterval)}
                  onChange={onRecurrenceIntervalChange}
                  style={{ width: 200 }}
                />
                <div style={{ width: 8 }} />
                <FormControl style={{ width: 200 }}>
                  <InputLabel htmlFor="recurrence-end">Recurrence End</InputLabel>
                  <NativeSelect
                    value={data.recurrenceEnd}
                    onChange={onRecurrenceEndChange}
                    inputProps={{
                      name: 'recurrence-end',
                      id: 'recurrence-end',
                    }}
                  >
                    <option value="never">Never</option>
                    <option value="onDay">On Specified Day</option>
                    <option value="afterAmount">After Specified Amount of Occurences</option>
                  </NativeSelect>
                </FormControl>
                {data.recurrenceEnd !== 'never' && (
                  <>
                    {data.recurrenceEnd === 'onDay' && (
                      <TextField
                        label="End on Day"
                        type="number"
                        value={String(data.recurrenceEndOnDay)}
                        onChange={onRecurrenceEndOnDayChange}
                      />
                    )}
                    {data.recurrenceEnd === 'afterAmount' && (
                      <TextField
                        label="End After Occurences"
                        type="number"
                        value={String(data.recurrenceEndAfterAmount)}
                        onChange={onRecurrenceEndAfterAmountChange}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </div>
          {/* {data.recurrenceFrequency === 'weekly' && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <ToggleButtonGroup value={data.recurOnDays} onChange={onRecurOnDaysChange} disabled>
            <ToggleButton value="monday">Monday</ToggleButton>
            <ToggleButton value="tuesday">Tuesday</ToggleButton>
            <ToggleButton value="wednesday">Wednesday</ToggleButton>
            <ToggleButton value="thursday">Thursday</ToggleButton>
            <ToggleButton value="friday">Friday</ToggleButton>
            <ToggleButton value="saturday">Saturday</ToggleButton>
            <ToggleButton value="sunday">Sunday</ToggleButton>
          </ToggleButtonGroup>
        </div>
      )} */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <FormControlLabel
              label="No notifications"
              control={
                <Checkbox
                  checked={data.configuration.noNotifications}
                  onChange={onNoNotificationsChange}
                  color="primary"
                />
              }
            />
            <div style={{ width: 8 }} />
            <FormControlLabel
              label="Events viewable before start date"
              control={
                <Checkbox
                  checked={data.configuration.eventsViewableBeforeStartDate}
                  onChange={onEventsViewableBeforeStartDateChange}
                  color="primary"
                />
              }
            />
          </div>
        </>
      )}
    </>
  );
}
