import React, { Component } from "react";
import {HeaderMovisio} from "../../components/HeaderMovisio";

class BasicContainer extends Component {
  // TODO make a styled components
  render() {
    const { children } = this.props;
    return (<div><HeaderMovisio /><div style={{minHeight: "95vh"}}>{children}</div><h1>Footer</h1></div>);
  }
}

export default BasicContainer;
