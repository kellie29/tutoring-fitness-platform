// @flow

import * as React from 'react';
import { OutlinedInput, Select as MuiSelect, FormControl, InputLabel } from '@material-ui/core';

type Props = {
  label: string,
  required?: Boolean,
  ...React.ElementConfig<MuiSelect>,
};

export default function SignupPage(props: Props) {
  const { label, required = false, children, ...restProps } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    // $FlowFixMe
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" required={required}>
      <InputLabel
        // $FlowFixMe
        ref={inputLabel}
        // htmlFor="outlined-age-native-simple"
      >
        {label}
      </InputLabel>
      <MuiSelect
        native
        input={
          <OutlinedInput
            // name="age"
            labelWidth={labelWidth}
            // id="outlined-age-native-simple"
            required={required}
          />
        }
        {...restProps}
      >
        {children}
      </MuiSelect>
    </FormControl>
  );
}
