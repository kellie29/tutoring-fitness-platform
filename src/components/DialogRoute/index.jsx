// @flow

import * as React from 'react';
import { Route, type ContextRouter, type LocationShape } from 'react-router-dom';

import { type DashboardDialog } from '../createDashboardDialog';

const resolveMaybeThunk = (maybeThunk, ...thunkArgs: any): any =>
  typeof maybeThunk === 'function' ? maybeThunk(...thunkArgs) : maybeThunk;

type To = string | $Exact<LocationShape>;

type Props<TCompleteValue, TProps: {}> = {|
  path: string,
  component: DashboardDialog<TCompleteValue, TProps>,
  componentProps?: ((routeProps: ContextRouter) => TProps) | TProps | null,
  cancelTo?: To,
  onCancel?: () => void | boolean,
  goBackOnCancel?: boolean,
  completeTo?: ((value: TCompleteValue) => To) | To,
  onComplete?: (value: TCompleteValue) => void | boolean,
|};

export default function DialogRoute<TCompleteValue, TProps: {}>(
  props: Props<TCompleteValue, TProps>,
) {
  const {
    path,
    component: Component,
    componentProps = null,
    cancelTo,
    onCancel,
    goBackOnCancel,
    completeTo,
    onComplete,
  } = props;

  return (
    <Route path={path}>
      {(routeProps: ContextRouter) => {
        const { history } = routeProps;

        const innerOnCancel = () => {
          if (onCancel && onCancel()) {
            return;
          }

          if (cancelTo) {
            const cancelPath = resolveMaybeThunk(cancelTo);
            history.push(cancelPath);
            return;
          }

          if (goBackOnCancel) {
            history.goBack();
          }

          throw new Error('Cancel was not handled');
        };

        const innerOnComplete = (value) => {
          if (onComplete && onComplete(value)) {
            return;
          }

          if (completeTo) {
            const completePath = resolveMaybeThunk(completeTo, value);
            history.push(completePath);
            return;
          }

          throw new Error('Complete was not handled');
        };

        const innerComponentProps = {
          open: Boolean(routeProps.match),
          onCancel: innerOnCancel,
          onComplete: innerOnComplete,
          ...(componentProps && resolveMaybeThunk(componentProps, routeProps)),
        };

        // $FlowFixMe
        return <Component {...innerComponentProps} />;
      }}
    </Route>
  );
}
