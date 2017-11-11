import React, { Component } from "react"
import { func } from "prop-types"
import styled from "styled-components"
import FontIcon from "material-ui/FontIcon"
import { connect } from "../../stores"
import Theme from "../../styles/Theme"
import { CollectionCard } from "../../shared/collection"
import "./styles/MovieOwnedCard.scss"

class MovieOwnedCard extends Component {
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

  handleSetWatched(movie) {
    this.props.user.setMovieWatched(movie.id, {
      watched: !movie.watched
    })
  }

  handleSetFavorite(movie) {
    this.props.user.setMovieFavorite(movie.id, {
      favorite: !movie.favorite
    })
  }

  render() {
    const { isSelected, movie } = this.props
    return (
      <div className={`movie-card ${movie.watched && "watched"}`}>
        <CollectionCard
          onClick={this.handleClick.bind(this)}
          isSelected={isSelected}
        >
          <IconContainer className="IconContainer">
            {movie.watched ? (
              <FontIcon
                onClick={this.handleSetWatched.bind(this, movie)}
                className="material-icons"
                color={`${Theme.mediumGreen}`}
                hoverColor={`${Theme.pink}`}
              >
                visibility
              </FontIcon>
            ) : (
              <FontIcon
                onClick={this.handleSetWatched.bind(this, movie)}
                className="material-icons"
                color={`${Theme.mediumGreen}`}
                hoverColor={`${Theme.pink}`}
              >
                visibility_off
              </FontIcon>
            )}
            {movie.favorite ? (
              <FontIcon
                onClick={this.handleSetFavorite.bind(this, movie)}
                className="material-icons"
                color={`${Theme.mediumGreen}`}
                hoverColor={`${Theme.pink}`}
              >
                favorite
              </FontIcon>
            ) : (
              <FontIcon
                onClick={this.handleSetFavorite.bind(this, movie)}
                className="material-icons"
                color={`${Theme.mediumGreen}`}
                hoverColor={`${Theme.pink}`}
              >
                favorite_outline
              </FontIcon>
            )}
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
export default connect(mapStateToProps)(MovieOwnedCard)

const Poster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`

const IconContainer = styled.div`
  position: absolute;
  padding: 4px;
  padding-right: 12px;
  z-index: 3;
  flex-direction: row;
  justify-content: space-between;
  width: inherit;
`

// const IconPlatform = styled.i``
