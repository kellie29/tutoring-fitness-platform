// @flow

import { type Store } from 'redux';
import { configureStore, getDefaultMiddleware, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { type AsyncTask } from '../components/useAsyncTask';

import trackingMiddleware from './middleware/trackingMiddleware';

export { default as useSelector } from './useSelector';
export { default as useDispatchers } from './useDispatchers';
export { default as useDispatch } from './useDispatch';
export { default as connect } from './connect';

export type State = {
  userAuthenticationToken: string | null,
  asyncTasks: { [id: string]: AsyncTask<any, any> },
  isDrawerOpen: boolean,
  isTutorialCollapsed: boolean,
  trackingEnabled: boolean,
  dismissedInfoBoxIds: $ReadOnlyArray<string>,
  clientProfileSelectedChartIds: { [clientProfileId: string]: string },
};

const initialState: State = {
  userAuthenticationToken: null,
  asyncTasks: {},
  isDrawerOpen: window.innerWidth >= 960,
  isTutorialCollapsed: false,
  trackingEnabled: true,
  dismissedInfoBoxIds: [],
  clientProfileSelectedChartIds: {},
};

export const actionCreators = {
  login: (authenticationToken: string) => ({
    type: 'LOGIN',
    payload: { authenticationToken },
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  setAsyncTask: (id: string, asyncTask: AsyncTask<any, any>) => ({
    type: 'SET_ASYNC_TASK',
    payload: { id, asyncTask },
  }),
  updateAsyncTask: (id: string, partialAsyncTask: $Shape<AsyncTask<any, any>>) => ({
    type: 'UPDATE_ASYNC_TASK',
    payload: { id, partialAsyncTask },
  }),
  deleteAsyncTask: (id: string) => ({
    type: 'DELETE_ASYNC_TASK',
    payload: { id },
  }),
};

export type Action =
  | {|
      type: 'LOGIN',
      payload: {| authenticationToken: string |},
    |}
  | {|
      type: 'LOGOUT',
    |}
  | {|
      type: 'drawerOpen',
    |}
  | {|
      type: 'drawerClose',
    |}
  | {|
      type: 'drawerToggle',
    |}
  | {|
      type: 'tutorialCollapse',
    |}
  | {|
      type: 'SET_ASYNC_TASK',
      payload: {| id: string, asyncTask: AsyncTask<any, any> |},
    |}
  | {|
      type: 'UPDATE_ASYNC_TASK',
      payload: {| id: string, partialAsyncTask: $Shape<AsyncTask<any, any>> |},
    |}
  | {|
      type: 'DELETE_ASYNC_TASK',
      payload: {| id: string |},
    |}
  | {|
      type: 'setTrackingEnabled',
      payload: boolean,
    |}
  | {|
      type: 'trackEvent',
      payload: {| name: string, parameters: {} |},
    |}
  | {|
      type: 'trackView',
      payload: {| path: string |},
    |}
  | {|
      type: 'dismissInfoBox',
      payload: string,
    |}
  | {|
      type: 'showInfoBox',
      payload: string,
    |}
  | {|
      type: 'setClientProfileSelectedChartId',
      payload: [string, string],
    |};

const reducer = createReducer(initialState, {
  LOGIN: (state, action) => ({
    ...state,
    userAuthenticationToken: action.payload.authenticationToken,
  }),
  LOGOUT: (state) => ({
    ...state,
    userAuthenticationToken: null,
  }),
  drawerOpen: (state) => ({
    ...state,
    isDrawerOpen: true,
  }),
  drawerClose: (state) => ({
    ...state,
    isDrawerOpen: false,
  }),
  drawerToggle: (state) => ({
    ...state,
    isDrawerOpen: !state.isDrawerOpen,
  }),
  tutorialCollapse: (state) => ({
    ...state,
    isTutorialCollapsed: true,
  }),
  SET_ASYNC_TASK: (state, action) => {
    const { id, asyncTask } = action.payload;

    return {
      ...state,
      asyncTasks: {
        ...state.asyncTasks,
        [id]: asyncTask,
      },
    };
  },
  UPDATE_ASYNC_TASK: (state, action) => {
    const { id, partialAsyncTask } = action.payload;

    return {
      ...state,
      asyncTasks: {
        ...state.asyncTasks,
        [id]: { ...state.asyncTasks[id], ...partialAsyncTask },
      },
    };
  },
  DELETE_ASYNC_TASK: (state, action) => {
    const { id } = action.payload;

    const nextAsyncTasks = { ...state.asyncTasks };
    delete nextAsyncTasks[id];

    return {
      ...state,
      asyncTasks: nextAsyncTasks,
    };
  },
  setTrackingEnabled: (state, action) => ({
    ...state,
    trackingEnabled: action.payload,
  }),
  dismissInfoBox: (state, action) => {
    const infoBoxId = action.payload;

    return {
      ...state,
      dismissedInfoBoxIds: [...state.dismissedInfoBoxIds, infoBoxId],
    };
  },
  showInfoBox: (state, action) => {
    const infoBoxId = action.payload;

    return {
      ...state,
      dismissedInfoBoxIds: [...state.dismissedInfoBoxIds].filter(
        (dismissedInfoBoxId) => dismissedInfoBoxId !== infoBoxId,
      ),
    };
  },
  setClientProfileSelectedChartId: (state, action) => {
    const [clientProfileId, chartId] = action.payload;

    return {
      ...state,
      clientProfileSelectedChartIds: {
        ...state.clientProfileSelectedChartIds,
        [clientProfileId]: chartId,
      },
    };
  },
});

export default function createAppStore(): { store: Store<State, Action>, persistor: any } {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'userAuthenticationToken',
      'isDrawerOpen',
      'isTutorialCollapsed',
      'trackingEnabled',
      'dismissedInfoBoxIds',
      'clientProfileSelectedChartIds',
    ],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        // TODO: Enable and refactor
        serializableCheck: false,
      }),
      trackingMiddleware,
    ],
  });

  const persistor = persistStore(store);

  return { store, persistor };
}
