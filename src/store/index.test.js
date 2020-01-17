// @flow

import createAppStore from '.';

it('can create store', () => {
  const { store: appStore } = createAppStore();

  expect(appStore).toBeDefined();
});

it('can login and logout', () => {
  const { store: appStore } = createAppStore();

  expect(appStore.getState().userAuthenticationToken).toBe(null);

  appStore.dispatch({
    type: 'LOGIN',
    payload: {
      authenticationToken: 'asd',
    },
  });

  expect(appStore.getState().userAuthenticationToken).toBe('asd');

  appStore.dispatch({
    type: 'LOGOUT',
  });

  expect(appStore.getState().userAuthenticationToken).toBe(null);
});
