import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { func } from "prop-types"
import styled from "styled-components"
import FontIcon from "material-ui/FontIcon"
// import FontIcon from "material-ui/FontIcon"
import Theme from "../../styles/Theme"
import { CollectionCard } from "../../shared/collection"
import "./styles/MovieOwnedCard.scss"

@asReactiveLoader
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
              className="material-icons"
              color={`${Theme.mediumGreen}`}
              hoverColor={`${Theme.fluoGreen}`}
            >
              remove_red_eye
            </FontIcon>
            <FontIcon
              className="material-icons"
              color={`${Theme.mediumGreen}`}
              hoverColor={`${Theme.fluoGreen}`}
            >
              favorite
            </FontIcon>
          </IconContainer>
          <Poster alt="" src={movie.poster} />
        </CollectionCard>
      </div>
    )
  }
}

export default MovieOwnedCard

const Poster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  &:hover {
    filter: brightness(50%);
  }
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
