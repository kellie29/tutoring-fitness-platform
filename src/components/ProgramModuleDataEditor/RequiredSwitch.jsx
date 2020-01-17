// @flow

import * as React from 'react';
import Switch from '@material-ui/core/Switch';

type Props = {
  required: boolean,
  onRequiredChange: (checked: boolean) => void,
};

export default function RequiredSwitch(props: Props) {
  const { required, onRequiredChange } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
      <Switch
        color="primary"
        checked={required}
        onChange={(event) => onRequiredChange(event.target.checked)}
      />
      Required?
    </div>
  );
}
