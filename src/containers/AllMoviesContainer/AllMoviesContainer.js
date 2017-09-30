import React, { Component } from "react";
import { asReactiveLoader } from "mobx-models/reactiveLoader";
import { CollectionGrid } from "../../shared/collection";
import MovieCard from "./MovieCard";

@asReactiveLoader
class AllMoviesContainer extends Component {
  render() {
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </CollectionGrid>
      </div>
    );
  }
}

export default AllMoviesContainer;
