import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { CollectionGrid } from "../../shared/collection"
import MovieCard from "./MovieCard"
import MovieExpanded from "./MovieExpanded"

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

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: null }

  handleExpand = index => {
    console.log(index)
    this.setState({ indexExpanded: index })
  }
  getChildToDisplay() {
    if (this.state.indexExpanded) {
      return React.createElement(MovieExpanded, {movie: movies[this.state.indexExpanded]})
    }
      return null
  }

  render() {

    // const { indexExpanded } = this.state
    // TODO createElement MovieExpanded
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid childToDisplay={this.getChildToDisplay()}>
          {movies.map((movie, i) => {
            return <MovieCard movie={movie} key={i} onMovieChange={this.handleExpand.bind(this, i)} />
          })}
        </CollectionGrid>
      </div>
    )
  }
}

export default AllMoviesContainer
