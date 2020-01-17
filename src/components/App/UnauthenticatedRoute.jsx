// @flow

import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useIsAuthenticated from '../useIsAuthenticated';

type Props = {|
  ...$Diff<React.ElementConfig<typeof Route>, { children: any, render: any }>,
  component: React$ComponentType<any>,
|};

export default function UnauthenticatedRoute(props: Props) {
  const { component: Component, ...rest } = props;

  const isAuthenticated = useIsAuthenticated();

  return (
    <Route
      {...rest}
      render={(componentProps) => {
        if (isAuthenticated === null) {
          return null;
        }

        if (isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/dashboard/',
                state: { from: componentProps.location },
              }}
            />
          );
        }

        return <Component {...componentProps} />;
      }}
    />
  );
}
