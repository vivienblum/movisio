import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import MdPlaylistAdd from "react-icons/lib/md/playlist-add"

import Theme from "../../styles/Theme"

export default class ActionMovie extends Component {
  render() {
    return (
      <RaisedButton
        backgroundColor={`${Theme.lightGrey}`}
        label="Add to my movies"
        icon={<MdPlaylistAdd />}
        onClick={this.props.onAction.bind(this)}
      />
    )
  }
}
