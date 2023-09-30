import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.group('ERROR');
    console.log(error);
    console.log(errorInfo);
    console.groupEnd();
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p
          className={
            'w-full max-w-[800px] h-fit mx-auto p-[1rem] leading-[1.5] bg-red-500/50 text-red-500 border-[2px] border-red-500'
          }>
          OOPS SOMETHING WENT WRONG HERE
        </p>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
