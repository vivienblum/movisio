import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { func } from "prop-types"
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
    const { isSelected } = this.props
    return (
      <CollectionCard onClick={this.handleClick.bind(this)} isSelected={isSelected}>
        <img
          alt=""
          src="http://www.funsundivetravel.com/wp-content/uploads/2015/02/200x300.gif"
        />
      </CollectionCard>
    )
  }
}

export default MovieCard
