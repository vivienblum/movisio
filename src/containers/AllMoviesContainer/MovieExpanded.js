import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
// import { func } from "prop-types"

@asReactiveLoader
class MovieExpanded extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  render() {
    return (
      <div>
        <h1 style={{color: 'white'}}>{this.props.movie}</h1>
      </div>
    )
  }
}

export default MovieExpanded
