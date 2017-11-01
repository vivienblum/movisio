import React, { Component } from "react"
import styled from "styled-components"
import { Search } from "../../shared/search"
import { connect } from "../../stores"

class SearchMovie extends Component {
  state = { movies: [] }

  handleSearch(search) {
    return this.props.movieStore.getSearch({ search }).then(() => {
      const movies = this.props.movieStore.searchMovies
      this.setState({ movies })
    })
  }

  handleAddMovie(movie) {
    return movie.create().then(() => {
      this.setState({ movies: [] })
    })
  }

  render() {
    const { movies } = this.state
    return (
      <Search onSearch={this.handleSearch.bind(this)}>
        <List>
          {movies.map((movie, i) => {
            return (
              <MoviePreview
                key={i}
                onClick={this.handleAddMovie.bind(this, movie)}
              >
                <Poster src={movie.poster} />
                <h3>{movie.title}</h3>
              </MoviePreview>
            )
          })}
        </List>
      </Search>
    )
  }
}

const mapStateToProps = state => ({
  movieStore: state.movieStore
})
export default connect(mapStateToProps)(SearchMovie)

// const SearchContainter = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
// `

const List = styled.div``
const MoviePreview = styled.div`
  display: flex;
  cursor: pointer;
`
const Poster = styled.img`
  width: 50px;
  height: 70px;
  object-fit: cover;
`
