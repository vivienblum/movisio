import React, { Component } from "react"
import { observer } from "mobx-react"
import { func } from "prop-types"

@observer
export default class MovieCard extends Component {
  static propTypes = {
    onClick: func.isRequired
  }

  render() {
    const { children, onClick } = this.props
    return (
      <div className="collection-card" onClick={onClick}>
        {children}
      </div>
    )
  }
}
