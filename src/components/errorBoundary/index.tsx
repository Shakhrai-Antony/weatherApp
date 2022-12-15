import React, { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
}

export interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <h1>
          Ooops! Sorry! Something went wrong. We are solving this problem
          already
        </h1>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
