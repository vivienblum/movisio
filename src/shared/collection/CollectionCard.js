import React, { Component } from "react"
import { func } from "prop-types"

export default class MovieCard extends Component {
  static propTypes = {
    onClick: func.isRequired
  }

  static defaultProps = {
    isSelected: false
  }

  render() {
    const { children, onClick } = this.props
    const { isSelected } = this.props
    return (
      <div
        className={`collection-card ${isSelected && "selected"}`}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
}
