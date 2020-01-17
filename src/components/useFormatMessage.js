// @flow

import * as React from 'react';
// $FlowFixMe
import { useIntl } from 'react-intl';

export default function useFormatMessage() {
  const intl = useIntl();
  return React.useCallback((id: string, values?: any) => intl.formatMessage({ id }, values), [
    intl,
  ]);
}
