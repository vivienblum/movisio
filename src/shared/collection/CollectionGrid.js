import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
export default class CollectionGrid extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {React.Children.map(children, child => {
          return React.cloneElement(child);
        })}
      </div>
    );
  }
}
