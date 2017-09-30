import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class MovieCard extends Component {
  render() {
    const { children } = this.props;
    return <div className="collection-card">{children}</div>;
  }
}
