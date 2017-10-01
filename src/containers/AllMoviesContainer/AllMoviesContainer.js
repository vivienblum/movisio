import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { CollectionGrid } from "../../shared/collection"
import MovieCard from "./MovieCard"

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: 2 }

  handleExpand = index => {
    console.log(index)
    this.setState({ indexExpanded: index })
  }

  render() {
    const movies = [
      "movie1",
      "movie2",
      "movie3",
      "movie4",
      "movie1",
      "movie2",
      "movie3",
      "movie4",
      "movie1",
      "movie2",
      "movie3",
      "movie4",
      "movie1",
      "movie2",
      "movie3",
      "movie4"
    ]
    // const { indexExpanded } = this.state
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid>
          {movies.map((movie, i) => {
            return (
              <MovieCard
                onClick={this.handleExpand.bind(this, i)}
                movie={movie}
                key={i}
              />
            )
          })}
        </CollectionGrid>
      </div>
    )
  }
}

export default AllMoviesContainer
