import React, { Component } from "react";
import { asReactiveLoader } from "mobx-models/reactiveLoader";
import { CollectionCard } from "../../shared/collection";

@asReactiveLoader
class MovieCard extends Component {
  render() {
    return (
      <div>
        <CollectionCard>MovieCard</CollectionCard>
      </div>
    );
  }
}

export default MovieCard;
