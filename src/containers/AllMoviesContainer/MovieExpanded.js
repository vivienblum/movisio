import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
// import { func } from "prop-types"

@asReactiveLoader
class MovieExpanded extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  render() {
    const { movie } = this.props
    return (
      <div>
        <h1 style={{ color: "white" }}>{movie.title}</h1>
      </div>
    )
  }
}

export default MovieExpanded
