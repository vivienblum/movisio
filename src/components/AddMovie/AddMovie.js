import React, { Component } from "react"
import styled from "styled-components"
import RaisedButton from "material-ui/RaisedButton"
import ActionAndroid from "material-ui/svg-icons/action/android"

import { SearchMovie } from "../SearchMovie"
import { connect } from "../../stores"

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
        icon={<ActionAndroid />}
        style={{ margin: "10px" }}
        onClick={this.handleOpenChange.bind(this)}
      />
    )
  }
}
export default AddMovie
