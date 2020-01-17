// @flow

import * as React from 'react';

import LoadingView from '../LoadingView';
import ErrorBoundary from '../ErrorBoundary';

export { default as DashboardPageTabBody } from './DashboardPageTabBody';

export default function createDashboardPageTab<Config: {}>(
  WrappedComponent: React.AbstractComponent<Config>,
): React.AbstractComponent<Config> {
  return (props) => {
    return (
      <React.Suspense fallback={<LoadingView />}>
        <ErrorBoundary>
          <WrappedComponent {...props} />
        </ErrorBoundary>
      </React.Suspense>
    );
  };
}
