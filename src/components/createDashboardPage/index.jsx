// @flow

import * as React from 'react';
import Hidden from '@material-ui/core/Hidden';

import DashboardPageFrame from '../DashboardPageFrame';
import TutorialStepTracker from '../TutorialStepTracker';
import LoadingView from '../LoadingView';
import ErrorBoundary from '../ErrorBoundary';

import DashboardPageScrollView from './DashboardPageScrollView';

export { default as DashboardPageBody } from './DashboardPageBody';
export { useDashboardPageScrollViewRef } from './DashboardPageScrollView';

export default function createDashboardPage<Config: {}>(
  WrappedComponent: React.AbstractComponent<Config>,
): React.AbstractComponent<Config> {
  return (props) => {
    return (
      <DashboardPageFrame>
        <React.Suspense fallback={<LoadingView />}>
          <ErrorBoundary>
            <Hidden xsDown>
              <TutorialStepTracker />
            </Hidden>
            <DashboardPageScrollView>
              <React.Suspense fallback={<LoadingView />}>
                <WrappedComponent {...props} />
              </React.Suspense>
            </DashboardPageScrollView>
          </ErrorBoundary>
        </React.Suspense>
      </DashboardPageFrame>
    );
  };
}
