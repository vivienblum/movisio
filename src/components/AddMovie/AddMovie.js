import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import MdAdd from "react-icons/lib/md/add"

import { SearchMovie } from "../SearchMovie"

class AddMovie extends Component {
  state = { open: false }

  handleOpenChange(prevState) {
    this.setState({ open: !prevState.open })
  }

  render() {
    const { open } = this.state
    return open ? (
      <SearchMovie />
    ) : (
      <RaisedButton
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        label="Add a movie"
        icon={<MdAdd />}
        style={{ margin: "10px" }}
        onClick={this.handleOpenChange.bind(this)}
      />
    )
  }
}
export default AddMovie
