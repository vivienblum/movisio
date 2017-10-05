import React, { Component } from "react";

class BasicContainer extends Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default BasicContainer;
