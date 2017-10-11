import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { func } from "prop-types"
import styled from "styled-components"
// import FontIcon from "material-ui/FontIcon"
// import Theme from "../../styles/Theme"
import { CollectionCard } from "../../shared/collection"

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

  render() {
    const { isSelected, movie } = this.props
    return (
      <CollectionCard
        onClick={this.handleClick.bind(this)}
        isSelected={isSelected}
      >
        <Poster alt="" src={movie.poster} />
      </CollectionCard>
    )
  }
}

export default MovieCard

const Poster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  &:hover {
    filter: brightness(50%);
  }
`
