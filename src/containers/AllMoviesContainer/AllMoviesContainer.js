import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"

import { connect } from "../../stores"
import { CollectionGrid } from "../../shared/collection"
import { MovieCard } from "../../components/MovieCard"
import { MovieOwnedCard } from "../../components/MovieOwnedCard"
import MovieExpanded from "./MovieExpanded"
import { AddMovie } from "../../components/AddMovie"
import { Filters } from "../../components/Filters"

const AllMoviesContainer = asReactiveLoader(
  class AllMoviesContainer extends Component {
    state = { indexExpanded: null, sort: null }

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

    handleChangeSort(sort) {
      this.setState({ sort })
    }

    handleChangeFilters(filter) {
      console.log(filter)
    }

    render() {
      const { indexExpanded } = this.state
      const { movieStore } = this.props
      // const movies = movieStore.moviesFilteredByTilte(this.props.user.movies)
      const movies = movieStore.applySortFilter(
        this.props.user.movies,
        this.state.sort
      )
      // console.log(movies)
      return (
        <div className="movies-container">
          <h1>All Movies</h1>
          <AddMovie />
          <Filters
            onChangeSort={this.handleChangeSort.bind(this)}
            onChangeFilters={this.handleChangeFilters.bind(this)}
          />
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
