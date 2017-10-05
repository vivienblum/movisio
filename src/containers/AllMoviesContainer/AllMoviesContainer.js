import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { CollectionGrid } from "../../shared/collection"
import MovieCard from "./MovieCard"
import MovieExpanded from "./MovieCard"

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: 2 }

  // handleExpand = index => {
  //   // console.log(index)
  //   this.setState({ indexExpanded: index })
  // }

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
    // TODO createElement MovieExpanded
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid childToDisplay={<h1 style={{color: "white"}}>sfsdf</h1>}>
          {movies.map((movie, i) => {
            return <MovieCard movie={movie} key={i} />
          })}
        </CollectionGrid>
      </div>
    )
  }
}

export default AllMoviesContainer
