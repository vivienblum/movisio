import React, { Component } from "react";
import { asReactiveLoader } from "mobx-models/reactiveLoader";
import { CollectionGrid } from "../../shared/collection";

@asReactiveLoader
class AllMoviesContainer extends Component {
  render() {
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid>
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
        </CollectionGrid>
      </div>
    );
  }
}

export default AllMoviesContainer;
