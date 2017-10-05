import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
// import { func } from "prop-types"
import { CollectionCard } from "../../shared/collection"

@asReactiveLoader
class MovieExpanded extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  render() {
    const { onClick } = this.props
    return (
      <div>
        <h1>MovieExpanded</h1>
      </div>
    )
  }
}

export default MovieExpanded
