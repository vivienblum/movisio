import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { connect } from "../../stores"
import { CollectionGrid } from "../../shared/collection"
// import MovieCard from "./MovieCard"
import { MovieCard } from "../../components/MovieCard"
import { MovieOwnedCard } from "../../components/MovieOwnedCard"
import MovieExpanded from "./MovieExpanded"
import { SearchMovie } from "../../components/SearchMovie"

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: null }

  handleExpand = index => {
    this.setState({ indexExpanded: index })
  }

  getChildToDisplay(movies) {
    if (this.state.indexExpanded != null) {
      return React.createElement(MovieExpanded, {
        movie: movies[this.state.indexExpanded]
      })
    }
    return null
  }

  render() {
    const { indexExpanded } = this.state
    // const { user } = this.props
    const movies = this.props.user.moviesSortedByRandom
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <SearchMovie />
        <CollectionGrid childToDisplay={this.getChildToDisplay(movies)}>
          {movies.map((movie, i) => {
            return movie.owned ? (
              <MovieOwnedCard
                movie={movie}
                key={i}
                onMovieChange={this.handleExpand.bind(this, i)}
                isSelected={i === indexExpanded}
              />
            ) : (
              <MovieCard
                movie={movie}
                key={i}
                onMovieChange={this.handleExpand.bind(this, i)}
                isSelected={i === indexExpanded}
              />
            )
          })}
        </CollectionGrid>
      </div>
    )
  }
}
const mapStateToProps = ({ userStore, movieStore }) => {
  return {
    user: userStore.user,
    movieStore: movieStore
  }
}
export default connect(mapStateToProps)(AllMoviesContainer)
