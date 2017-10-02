import React, { Component } from "react"
import { observer } from "mobx-react"
import { func } from "prop-types"

@observer
export default class MovieCard extends Component {
  state = { isSelected: false }

  static propTypes = {
    onClick: func.isRequired
  }

  handleToggle() {
    this.setState({ isSelected: true })
  }

  render() {
    const { children, onClick } = this.props
    const { isSelected } = this.state
    // const className =
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
