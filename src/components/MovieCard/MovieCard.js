import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { func } from "prop-types"
import styled from "styled-components"
import FontIcon from "material-ui/FontIcon"
import { connect } from "../../stores"
import Theme from "../../styles/Theme"
import { CollectionCard } from "../../shared/collection"
import "./styles/MovieCard.scss"

@asReactiveLoader
class MovieCard extends Component {
  static propTypes = {
    onMovieChange: func.isRequired
  }

  static defaultProps = {
    isSelected: false
  }

  handleClick() {
    this.props.onClick()
    this.props.onMovieChange()
  }

  handleAddMovie(movie) {
    this.props.user.addMovie({ movie_id: movie.id })
  }

  render() {
    const { isSelected, movie } = this.props
    return (
      <div className="movie-card">
        <CollectionCard
          onClick={this.handleClick.bind(this)}
          isSelected={isSelected}
        >
          <IconContainer className="IconContainer">
            <FontIcon
              onClick={this.handleAddMovie.bind(this, movie)}
              className="material-icons"
              color={`${Theme.mediumGreen}`}
              hoverColor={`${Theme.pink}`}
            >
              playlist_add
            </FontIcon>
          </IconContainer>
          <Poster alt="" src={movie.poster} />
        </CollectionCard>
      </div>
    )
  }
}
const mapStateToProps = ({ userStore }) => {
  return {
    user: userStore.user
  }
}
export default connect(mapStateToProps)(MovieCard)

const Poster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  // &:hover {
  //   filter: brightness(50%);
  // }
`

const IconContainer = styled.div`
  position: absolute;
  // top: 0;
  // left: 0;
  padding: 4px;
  z-index: 3;
  flex-direction: row;
  justify-content: space-between;
  color: red;
`

// const IconPlatform = styled.i``
