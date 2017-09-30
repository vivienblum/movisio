import React, { Component } from "react";
import { asReactiveLoader } from "mobx-models/reactiveLoader";
import { CollectionCard } from "../../shared/collection";

@asReactiveLoader
class MovieCard extends Component {
  render() {
    return (
      <CollectionCard>
        <img
          alt=""
          src="http://www.funsundivetravel.com/wp-content/uploads/2015/02/200x300.gif"
        />
      </CollectionCard>
    );
  }
}

export default MovieCard;
