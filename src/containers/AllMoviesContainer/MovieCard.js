import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
// import { func } from "prop-types"
import { CollectionCard } from "../../shared/collection"

@asReactiveLoader
class MovieCard extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  render() {
    const { onClick } = this.props
    return (
      <CollectionCard onClick={onClick}>
        <img
          alt=""
          src="http://www.funsundivetravel.com/wp-content/uploads/2015/02/200x300.gif"
        />
      </CollectionCard>
    )
  }
}

export default MovieCard
