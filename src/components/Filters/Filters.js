import React, { Component } from "react"
import { List, ListItem } from "material-ui/List"
import Avatar from "material-ui/Avatar"

import { Search } from "../../shared/search"
import { connect } from "../../stores"

class Filters extends Component {
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
              <ListItem
                key={i}
                primaryText={movie.title}
                leftAvatar={<Avatar src={movie.poster} />}
                onClick={this.handleAddMovie.bind(this, movie)}
              />
            )
          })}
        </List>
      </Search>
    )
  }
}

const mapStateToProps = state => ({
  movieStore: state.movieStore,
  user: state.userStore.user
})
export default connect(mapStateToProps)(Filters)
