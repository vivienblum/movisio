import React, { Component } from "react"
import styled from "styled-components"
import AutoComplete from "material-ui/AutoComplete"
import FlatButton from "material-ui/FlatButton"
import { connect } from "../../stores"

class SearchMovie extends Component {
  state = { search: "", movies: [] }

  handleUpdateInput(search) {
    this.setState({ search })
  }

  handleSearch() {
    const { search, movies } = this.state
    console.log(search)
    return this.props.movieStore.getSearch({ search }).then(() => {
      const movies = this.props.movieStore.searchMovies
      this.setState({ movies })
    })
    // const search = e.target.value
    // const dataSource = this.state.dataSource
    // dataSource.push("new")
    // this.setState({ search, dataSource })
  }

  render() {
    const { search, movies } = this.state
    return (
      <SearchContainter>
        <AutoComplete
          hintText="Movie"
          dataSource={[]}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          value={search}
        />
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          label="Search"
          onClick={this.handleSearch.bind(this)}
        />

        <List>
          {movies.map((movie, i) => {
            return (
              <MoviePreview key={i}>
                <Poster src={movie.posterFromApi} />
                <h3>{movie.title}</h3>
              </MoviePreview>
            )
          })}
        </List>
      </SearchContainter>
    )
  }
}

const mapStateToProps = state => ({
  movieStore: state.movieStore
})
export default connect(mapStateToProps)(SearchMovie)

const SearchContainter = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const List = styled.div``
const MoviePreview = styled.div`display: flex;`
const Poster = styled.img`
  width: 50px;
  height: 70px;
  object-fit: cover;
`
