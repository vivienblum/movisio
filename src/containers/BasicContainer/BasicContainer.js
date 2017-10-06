import React, { Component } from "react";
import {HeaderMovisio} from "../../components/HeaderMovisio";
import {FooterMovisio} from "../../components/FooterMovisio";

class BasicContainer extends Component {
  // TODO make a styled components
  render() {
    const { children } = this.props;
    return (<div><HeaderMovisio /><div style={{minHeight: "95vh"}}>{children}</div><FooterMovisio /></div>);
  }
}

export default BasicContainer;
