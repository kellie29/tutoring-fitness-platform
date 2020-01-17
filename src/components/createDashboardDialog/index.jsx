// @flow

import * as React from 'react';
import invariant from 'invariant';
import { Dialog } from '@material-ui/core';

import ErrorBoundary from '../ErrorBoundary';
import LoadingView from '../LoadingView';

import DashboardDialogErrorFallback from './DashboardDialogErrorFallback';

export { default as DashboardDialogHeader } from './DashboardDialogHeader';

type DialogContext = {|
  onCancel: () => void,
|};
const dialogContext = React.createContext<DialogContext | null>(null);

export const useDialogContextValue = () => {
  const dialogContextValue = React.useContext(dialogContext);
  invariant(dialogContextValue, 'Expected "dialogContextValue"');
  return dialogContextValue;
};

export type DashboardDialogProps<TCompleteValue, TProps: {}> = {|
  open: boolean,
  onCancel: () => void,
  onComplete: (value: TCompleteValue) => void,
  ...$Exact<TProps>,
|};

export type DashboardDialog<TCompleteValue, TProps: {}> = React.AbstractComponent<
  DashboardDialogProps<TCompleteValue, TProps>,
>;

export default function createDashboardDialog<TCompleteValue, TProps: {}>(
  WrappedComponent: DashboardDialog<TCompleteValue, TProps>,
): DashboardDialog<TCompleteValue, TProps> {
  return (props: DashboardDialogProps<TCompleteValue, TProps>) => {
    const dialogContextValue = React.useMemo(
      () => ({
        onCancel: props.onCancel,
      }),
      [props.onCancel],
    );

    return (
      <dialogContext.Provider value={dialogContextValue}>
        <ErrorBoundary
          renderFallback={(error, retry) => (
            <DashboardDialogErrorFallback error={error} retry={retry} dialogProps={props} />
          )}
        >
          <React.Suspense
            fallback={
              <Dialog open={props.open} fullWidth maxWidth="xs">
                <LoadingView />
              </Dialog>
            }
          >
            <WrappedComponent {...props} />
          </React.Suspense>
        </ErrorBoundary>
      </dialogContext.Provider>
    );
  };
}
