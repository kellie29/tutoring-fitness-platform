// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import CssBaseline from '@material-ui/core/CssBaseline';
import once from 'lodash/once';

import useTracker from '../useTracker';
import LoadingView from '../LoadingView';
import ErrorBoundary from '../ErrorBoundary';
import useFormatMessage from '../useFormatMessage';
import appData from '../../data';

import Routes from './Routes';
import AsyncTaskDialogRenderer from './AsyncTaskDialogRenderer';
import UserGate from './UserGate';

const trackRender = once((tracker) => {
  if (!window.performance) return;

  tracker.trackTiming('appRendered', window.performance.now());
});

export default function App() {
  const s = useFormatMessage();
  const tracker = useTracker();

  React.useEffect(() => {
    trackRender(tracker);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>{s('app.title')}</title>
        {appData.stylesheets.map((href, i) => (
          <link key={`appData-stylesheet-${i}`} href={href} rel="stylesheet" />
        ))}
        <style>
          {`
          body {
            font-family: '${appData.types.body}', sans-serif;
          }

          #root {
            display: flex; 
            flex-direction: column; 
            min-height: 100vh;
          }
        `}
        </style>
      </Helmet>
      <CssBaseline />
      <ErrorBoundary>
        <React.Suspense fallback={<LoadingView />}>
          <UserGate>
            <AsyncTaskDialogRenderer />
            <Routes />
          </UserGate>
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}
