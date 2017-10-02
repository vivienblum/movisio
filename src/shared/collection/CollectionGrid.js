import React, { Component } from "react"
import { observer } from "mobx-react"
import "./styles/CollectionGrid.scss"

@observer
export default class CollectionGrid extends Component {
  state = { nbPerLine: 3, nbLine: null, indexSelected: 2 }

  constructor() {
    super()
    this.renderChildren = this.renderChildren.bind(this)
  }

  componentWillMount() {
    const nbLine = Math.ceil(this.props.children.length / this.state.nbPerLine)
    this.setState({ nbLine })
  }

  renderLine(array) {
    return array.map(line => {
      return React.cloneElement(line)
    })
  }

  renderChildren() {
    const { nbPerLine } = this.state
    const matrix = []
    var i = 0
    var currentLine = 0
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
    return matrix.map((line, index) => {
      if (index === this.state.indexSelected) {
        return <div className="line-display" key={index} />
      }
      return (
        <div
          className="line-movie"
          key={index}
          style={{ borderStyle: "solid", borderColor: "red" }}
        >
          {this.renderLine(line)}
        </div>
      )
    })
  }

  render() {
    // const { children } = this.props
    // const { nbPerLine, nbLine } = this.state
    // var i = 0
    // const lines = new Array(nbLine)
    return (
      <div className="collection-grid">
        {// React.Children.map(children, child => {
        // //   // if(i > nbPerLine) {
        // //   //   i = 0
        // //   //   return <div style={{width: "100%", backgroundColor: "black", position: "relative"}}>tototototo</div>
        // //   // }
        // //   // i++
        //   return React.cloneElement(child)
        // })
        this.renderChildren()
        // React.Children.map(children, child => {
        //   return React.cloneElement(child)
        // })
        // lines.map((line, i) => {
        //
        //   return React.cloneElement(child)
        // })

        // for(var i = 0; i < nbLine; i++) {
        //
        // }
        }
      </div>
    )
  }
}
