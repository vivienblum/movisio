import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import MdVisibilityOff from "react-icons/lib/md/visibility-off"
import MdVisibility from "react-icons/lib/md/visibility"
import MdFavorite from "react-icons/lib/md/favorite"
import MdFavoriteOutline from "react-icons/lib/md/favorite-outline"
import Delete from "material-ui/svg-icons/action/delete"

import Theme from "../../styles/Theme"

export default function ActionMovieOwned({
  movie,
  onWatched,
  onFavorite,
  onRemove
}) {
  return (
    <div>
      <RaisedButton
        backgroundColor={`${Theme.lightGrey}`}
        label={movie.watched ? "Set unwatched" : "Set watched"}
        icon={movie.watched ? <MdVisibilityOff /> : <MdVisibility />}
        onClick={onWatched.bind(this)}
      />
      <RaisedButton
        backgroundColor={`${Theme.lightGrey}`}
        label={movie.favorite ? "Remove from favorites" : "Add to favorites"}
        icon={movie.favorite ? <MdFavoriteOutline /> : <MdFavorite />}
        onClick={onFavorite.bind(this)}
      />
      <RaisedButton
        backgroundColor={`${Theme.lightGrey}`}
        label={"Remove"}
        icon={<Delete />}
        onClick={onRemove.bind(this)}
      />
    </div>
  )
}
