import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { connect } from "../../stores"
import { CollectionGrid } from "../../shared/collection"
import MovieCard from "./MovieCard"
import MovieExpanded from "./MovieExpanded"
import { SearchMovie } from "../../components/SearchMovie"

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: null }

  componentDidMount() {
    this.props.movieStore.getAllMovies()
  }

  handleExpand = index => {
    this.setState({ indexExpanded: index })
  }

  getChildToDisplay() {
    if (this.state.indexExpanded != null) {
      return React.createElement(MovieExpanded, {
        movie: this.props.movieStore.allMovies[this.state.indexExpanded]
      })
    }
    return null
  }

  render() {
    const { indexExpanded } = this.state
    const { allMovies } = this.props.movieStore
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <SearchMovie />
        <CollectionGrid childToDisplay={this.getChildToDisplay()}>
          {allMovies.map((movie, i) => {
            return (
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
