import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });
  }
  render() {
    const { hasError, errorMessage } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>Oooops. That is not good </h1>
          <p style={{ color: "#fff" }}>{errorMessage}</p>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}
