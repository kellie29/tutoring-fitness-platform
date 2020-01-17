// @flow

// $FlowFixMe
import { type Persistor } from 'redux-persist';

export default function createReduxPersistPersistorBootstrapPromise(
  persistor: Persistor,
): Promise<void> {
  return new Promise((resolve) => {
    if (persistor.getState().bootstrapped) {
      resolve();
      return;
    }

    const unsubscribe = persistor.subscribe(() => {
      if (persistor.getState().bootstrapped) {
        resolve();
        unsubscribe();
      }
    });
  });
}
