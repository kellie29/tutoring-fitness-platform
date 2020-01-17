// @flow

import * as React from 'react';

export default function useInputCustomValue<TValue>(
  initialValue: (() => TValue) | TValue,
  fromString: (string: string) => TValue,
  toString: (value: TValue) => string,
): [TValue, any, any] {
  const [value, setValue] = React.useState<TValue>(initialValue);
  const onChange = React.useCallback(
    (event: SyntheticInputEvent<HTMLInputElement>) => {
      const stringValue = event.currentTarget.value;
      setValue(fromString(stringValue));
    },
    [fromString],
  );

  const stringValue = React.useMemo(() => toString(value), [toString, value]);

  const inputProps = React.useMemo(
    () => ({
      value: stringValue,
      onChange,
    }),
    [onChange, stringValue],
  );

  return [value, inputProps, setValue];
}
