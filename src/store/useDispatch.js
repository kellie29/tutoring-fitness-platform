// @flow

import { useDispatch } from 'react-redux';

import { type Action } from '.';

type UseDispatch = () => (action: Action) => void;

export default (useDispatch: UseDispatch);
