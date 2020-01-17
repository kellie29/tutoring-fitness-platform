// @flow

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { actionCreators } from '.';

export default function useDispatchers() {
  const dispatch = useDispatch();

  const actionDispatchers = React.useMemo(() => bindActionCreators(actionCreators, dispatch), [
    dispatch,
  ]);

  return actionDispatchers;
}
