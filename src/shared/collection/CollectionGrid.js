import React, { Component } from "react"
import { observer } from "mobx-react"
import "./styles/CollectionGrid.scss"

@observer
export default class CollectionGrid extends Component {
  state = { nbPerLine: 3, indexSelected: null }

  constructor() {
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderLine(array) {
    return array.map(line => {
      return React.cloneElement(line, {
        onClick: this.handleExpand.bind(this, line)
      })
    })
  }

  handleExpand = e => {
    const indexSelected = e.key
    this.setState({ indexSelected })
  }

  renderChildren() {
    const { nbPerLine } = this.state
    const matrix = []
    var i = 0
    var currentLine = 0
    var lineDisplay = null
    React.Children.forEach(this.props.children, (child, index) => {
      if (i >= nbPerLine) {
        currentLine++
        i = 0
      }
      if (i === 0) {
        matrix[currentLine] = []
      }
      i++
      matrix[currentLine].push(child)
    })
    if (this.state.indexSelected) {
      lineDisplay =
        Math.floor(this.state.indexSelected / this.state.nbPerLine) + 1
      const el = (
        <div key={lineDisplay} className="line-display">
          {this.props.childToDisplay}
        </div>
      )
      matrix.splice(lineDisplay, 0, el)
    }
    return matrix.map((line, index) => {
      if (index === lineDisplay) {
        return line
      }
      return (
        <div className="line-movie" key={index}>
          {this.renderLine(line)}
        </div>
      )
    })
  }

  render() {
    return <div className="collection-grid">{this.renderChildren()}</div>
  }
}
