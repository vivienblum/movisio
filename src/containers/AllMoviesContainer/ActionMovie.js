import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import MdPlaylistAdd from "react-icons/lib/md/playlist-add"

import Theme from "../../styles/Theme"

export default function ActionMovie({ onAction }) {
  return (
    <RaisedButton
      backgroundColor={`${Theme.lightGrey}`}
      label="Add to my movies"
      icon={<MdPlaylistAdd />}
      onClick={onAction.bind(this)}
    />
  )
}
