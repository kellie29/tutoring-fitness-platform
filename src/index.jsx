// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import invariant from 'invariant';

import Provider from './Provider';
import App from './components/App';
import { createRelayEnvironment } from './api';
import createAppStore from './store';
import * as serviceWorker from './serviceWorker';
import createReduxPersistPersistorBootstrapPromise from './helpers/createReduxPersistPersistorBootstrapPromise';
import { apiUrl } from './config';

// TODO: Don't import this here
import 'react-vis/dist/style.css';

async function main() {
  const { store, persistor } = createAppStore();

  await createReduxPersistPersistorBootstrapPromise(persistor);

  const relayEnvironment = createRelayEnvironment(() => ({
    url: apiUrl,
    authenticationToken: store.getState().userAuthenticationToken,
  }));

  const rootElement = document.getElementById('root');
  invariant(rootElement, 'Expected React root element');

  const providerProps = {
    store,
    relayEnvironment,
    locale: navigator.language,
  };

  ReactDOM.render(
    <Provider {...providerProps}>
      <App />
    </Provider>,
    rootElement,
  );

  // $FlowFixMe
  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./components/App', () => {
      // eslint-disable-next-line global-require
      const NextApp = require('./components/App').default;
      ReactDOM.render(
        <Provider {...providerProps}>
          <NextApp />
        </Provider>,
        rootElement,
      );
    });
  }
}

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
