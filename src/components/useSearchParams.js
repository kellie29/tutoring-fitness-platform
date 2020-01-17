// @flow

import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { URLSearchParams } from 'whatwg-url';

export default function useSearchParams(): URLSearchParams {
  const location = useLocation();

  const searchParams = React.useMemo(() => new URLSearchParams(location.search), [location.search]);

  return searchParams;
}
