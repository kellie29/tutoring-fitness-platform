// @flow

import * as React from 'react';

import ErrorView from './ErrorView';

const defaultRenderFallback = (error, retry) => <ErrorView error={error} retry={retry} />;

type Props = {
  renderFallback?: (error: any, retry: () => void) => React.Node,
  children: React.Node,
};

type State = {
  error: any | null,
};

export default class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: any) {
    return { error };
  }

  state = {
    error: null,
  };

  onRetryClick = () => {
    this.setState({ error: null });
  };

  render() {
    const { renderFallback = defaultRenderFallback, children } = this.props;
    const { error } = this.state;

    return <>{error ? renderFallback(error, this.onRetryClick) : children}</>;
  }
}
