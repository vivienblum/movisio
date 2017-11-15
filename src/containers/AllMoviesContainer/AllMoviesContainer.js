import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
// import { GridList, GridTile } from "material-ui/GridList"
// import IconButton from "material-ui/IconButton"
// import StarBorder from "material-ui/svg-icons/toggle/star-border"

import { connect } from "../../stores"
import { CollectionGrid } from "../../shared/collection"
// import MovieCard from "./MovieCard"
import { MovieCard } from "../../components/MovieCard"
import { MovieOwnedCard } from "../../components/MovieOwnedCard"
import MovieExpanded from "./MovieExpanded"
import { AddMovie } from "../../components/AddMovie"

const AllMoviesContainer = asReactiveLoader(
  class AllMoviesContainer extends Component {
    state = { indexExpanded: null }

    // componentWillDid() {
    //
    // }

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
      // const movies = this.props.user.movies
      const movies = this.props.user.moviesSortedByRecent
      return (
        <div className="movies-container">
          <h1>All Movies</h1>
          <AddMovie />
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
)
const mapStateToProps = ({ userStore, movieStore }) => {
  return {
    user: userStore.user,
    movieStore: movieStore
  }
}
export default connect(mapStateToProps)(AllMoviesContainer)
