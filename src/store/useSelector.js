// @flow

import { useSelector } from 'react-redux';

import { type State } from '.';

type UseSelector = <TMappedState>(mapStateToProps: (state: State) => TMappedState) => TMappedState;

// $FlowFixMe
export default (useSelector: UseSelector);
