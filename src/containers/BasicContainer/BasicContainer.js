import React, { Component } from "react";
import {HeaderMovisio} from "../../components/HeaderMovisio";

class BasicContainer extends Component {
  render() {
    const { children } = this.props;
    return (<div><HeaderMovisio />{children}<h1>Footer</h1></div>);
  }
}

export default BasicContainer;
