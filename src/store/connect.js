/* @flow */

import { connect as reactReduxConnect } from 'react-redux';

import { type State } from '.';

type MapStateToProps = (state: State) => Object;

export default function connect(mapStateToProps: ?MapStateToProps): any {
  return reactReduxConnect(mapStateToProps);
}
