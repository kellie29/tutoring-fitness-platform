// @flow

import * as React from 'react';
import { DateTime } from 'luxon';

const inputValueToDateTime = (inputValue) => {
  return DateTime.fromISO(inputValue);
};

const dateTimeToInputValue = (dateTime) => {
  return dateTime.toISODate();
};

type Value = DateTime;
export default function useDateInputValue(initialValue: (() => Value) | Value): [Value, any, any] {
  const [value, setValue] = React.useState<Value>(initialValue);

  const onChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setValue(inputValueToDateTime(inputValue));
  };

  const inputProps = {
    value: dateTimeToInputValue(value),
    onChange,
  };

  return [value, inputProps, setValue];
}
