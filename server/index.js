// @flow

import http from 'http';

import app from './app';

declare var __DEV__: boolean;

console.log(`Starting server (__DEV__: ${__DEV__.toString()})...`);

const server = http.createServer();

const port = process.env.PORT || '4000';
server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

let prevApp;
const loadApp = (nextApp) => {
  console.log('Loading app...');

  if (prevApp) {
    server.removeListener('request', prevApp);
  }

  server.addListener('request', nextApp);

  prevApp = nextApp;
};

loadApp(app);

declare var module: any;

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const nextApp = require('./app').default;
    loadApp(nextApp);
  });

  module.hot.addStatusHandler((status) => {
    switch (status) {
      case 'abort':
      case 'fail': {
        console.error(`Bad HMR status "${status}", exiting server...`);
        process.exit(1);
        break;
      }
      case 'check':
      case 'idle':
      case 'prepare':
      case 'ready':
      case 'dispose':
      case 'apply': {
        break;
      }
      default: {
        console.warn(`Unknown HMR status "${status}"`);
        break;
      }
    }
  });
}
