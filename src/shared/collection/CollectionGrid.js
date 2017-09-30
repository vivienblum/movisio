import React, { Component } from "react";
import { observer } from "mobx-react";
import "./styles/CollectionGrid.scss";

@observer
export default class CollectionGrid extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="collection-grid">
        {React.Children.map(children, child => {
          return React.cloneElement(child);
        })}
      </div>
    );
  }
}
