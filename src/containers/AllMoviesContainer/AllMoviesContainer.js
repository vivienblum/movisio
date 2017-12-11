import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import LinearProgress from "material-ui/LinearProgress"

import { connect } from "../../stores"
import { CollectionGrid } from "../../shared/collection"
import { MovieCard } from "../../components/MovieCard"
import { MovieOwnedCard } from "../../components/MovieOwnedCard"
import MovieExpanded from "./MovieExpanded"
import { AddMovie } from "../../components/AddMovie"
import { Filters } from "../../components/Filters"
import Theme from "../../styles/Theme"

const AllMoviesContainer = asReactiveLoader(
  class AllMoviesContainer extends Component {
    state = {
      indexExpanded: null,
      sort: null,
      search: "",
      owned: null,
      watched: null,
      favorite: null
    }

    shouldComponentUpdate(nextProps, nextState) {
      //  TODO more
      return nextProps.user.id !== null
    }

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

    handleChangeFilters(filter, type = "") {
      switch (type) {
        case "search":
          this.setState({ search: filter })
          break
        case "owned":
          this.setState({ owned: filter })
          break
        case "watched":
          this.setState({ watched: filter })
          break
        case "favorite":
          this.setState({ favorite: filter })
          break
        default:
          break
      }
    }

    render() {
      const { indexExpanded } = this.state
      const { movieStore } = this.props
      const { user } = this.props

      const movies = movieStore.applySortFilter(
        this.props.user.movies,
        this.state.sort,
        this.state.search,
        this.state.owned,
        this.state.watched,
        this.state.favorite
      )
      // const movies = ["toto", "totot", "ototototo"]
      console.log("chgt", movies.length)
      return (
        <div className="movies-container">
          <h1>All Movies</h1>
          <AddMovie />
          <Filters
            onChangeSort={this.handleChangeSort.bind(this)}
            onChangeFilters={this.handleChangeFilters.bind(this)}
          />
          {user.id === null && (
            <LinearProgress
              mode="indeterminate"
              color={`${Theme.mediumGreen}`}
              style={{ maxWidth: "70vw" }}
            />
          )}
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
