import React, { Component } from "react"
// import { asReactiveLoader } from "mobx-models/reactiveLoader"
import styled from "styled-components"
import { connect } from "../../stores"
import ActionMovie from "./ActionMovie"
import ActionMovieOwned from "./ActionMovieOwned"
import { Stars } from "../../shared/stars"

//@asReactiveLoader
class MovieExpanded extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  handleAddMovie(movie) {
    this.props.user.addMovie({ movie_id: movie.id })
  }

  handleChangeWatched(movie) {
    this.props.user.setMovieWatched(movie.id, {
      watched: !movie.watched
    })
  }

  handleChangeFavorite(movie) {
    this.props.user.setMovieFavorite(movie.id, {
      favorite: !movie.favorite
    })
  }

  render() {
    const { movie } = this.props
    return (
      <MovieExpandedContainer>
        <Poster src={movie.poster} />
        <Details>
          <Action>
            {movie.owned ? (
              <ActionMovieOwned
                movie={movie}
                onWatched={this.handleChangeWatched.bind(this, movie)}
                onFavorite={this.handleChangeFavorite.bind(this, movie)}
              />
            ) : (
              <ActionMovie onAction={this.handleAddMovie.bind(this, movie)} />
            )}
          </Action>

          <Title>{movie.title}</Title>
          <Info>
            <Rate>
              <Stars rate={movie.rate} />
            </Rate>
            <Year>{movie.year}</Year>
            <Runtime>{movie.runtime}</Runtime>
          </Info>
          <Plot>{movie.plot}</Plot>
        </Details>
      </MovieExpandedContainer>
    )
  }
}
const mapStateToProps = ({ userStore }) => {
  return {
    user: userStore.user
  }
}
export default connect(mapStateToProps)(MovieExpanded)

const MovieExpandedContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: white;
`
const Poster = styled.img`
  width: 200px;
  height: 300px;
`
const Details = styled.div`
  padding: 10px;
  max-width: 50%;
`
const Action = styled.div``
const Title = styled.h2``
const Info = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 60%;
  justify-content: space-between;
  margin-bottom: 10px;
`
const Rate = styled.div``
const Year = styled.span``
const Runtime = styled.span`display: none;`
const Plot = styled.p``
