// @flow

import * as React from 'react';

export default function useInputValue(initialValue: (() => string) | string): [string, any, any] {
  const [value, setValue] = React.useState<string>(initialValue);
  const onChange = React.useCallback((event: SyntheticInputEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  const inputProps = React.useMemo(
    () => ({
      value,
      onChange,
    }),
    [onChange, value],
  );

  return [value, inputProps, setValue];
}
