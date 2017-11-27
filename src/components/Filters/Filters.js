import React, { Component } from "react"
import { func } from "prop-types"
import { Card } from "material-ui/Card"
import TextField from "material-ui/TextField"
import Checkbox from "material-ui/Checkbox"
import ActionFavorite from "material-ui/svg-icons/action/favorite"
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border"
import Visibility from "material-ui/svg-icons/action/visibility"
import VisibilityOff from "material-ui/svg-icons/action/visibility-off"
import Archive from "material-ui/svg-icons/content/archive"
import UnArchive from "material-ui/svg-icons/content/unarchive"

import FontIcon from "material-ui/FontIcon"
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation"
import Paper from "material-ui/Paper"
import IconLocationOn from "material-ui/svg-icons/communication/location-on"

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />
// import FlatButton from "material-ui/FlatButton"

// import { Search } from "../../shared/search"

class Filters extends Component {
  state = {
    sort: null,
    search: "",
    owned: false,
    watched: false,
    favorite: false
  }

  static propTypes = {
    onChangeSort: func.isRequired,
    onChangeFilters: func.isRequired
  }

  handleChangeSort(e) {
    const sort = e.target.value
    this.setState({ sort }, () => {
      this.props.onChangeSort(this.state.sort)
    })
  }

  handleSearchChange(e) {
    const search = e.target.value
    this.setState({ search }, () => {
      this.props.onChangeFilters(this.state.search, "search")
    })
  }

  handleOwnedChange(e) {
    this.setState(
      prevState => {
        return {
          owned: !prevState.owned
        }
      },
      () => {
        this.props.onChangeFilters(this.state.owned, "owned")
      }
    )
  }

  handleWatchedChange(e) {
    this.setState(
      prevState => {
        return {
          watched: !prevState.watched
        }
      },
      () => {
        this.props.onChangeFilters(this.state.watched, "watched")
      }
    )
  }

  handleFavoriteChange(e) {
    this.setState(
      prevState => {
        return {
          favorite: !prevState.favorite
        }
      },
      () => {
        this.props.onChangeFilters(this.state.favorite, "favorite")
      }
    )
  }

  render() {
    const { sort, search, owned, watched, favorite } = this.state
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    )
    // return (
    //   <Card style={{ padding: "10px", width: "70%" }}>
    //     <select selected={sort} onChange={this.handleChangeSort.bind(this)}>
    //       <option value={1}>None</option>
    //       <option value={3}>Recent</option>
    //       <option value={4}>Popular</option>
    //     </select>
    //     <br />
    //     <TextField
    //       hintText="Search"
    //       onChange={this.handleSearchChange.bind(this)}
    //       value={search}
    //     />
    //     <Checkbox
    //       checked={owned}
    //       onCheck={this.handleOwnedChange.bind(this)}
    //       checkedIcon={<Archive />}
    //       uncheckedIcon={<UnArchive />}
    //       label="Owned"
    //     />
    //     <Checkbox
    //       checked={watched}
    //       onCheck={this.handleWatchedChange.bind(this)}
    //       checkedIcon={<Visibility />}
    //       uncheckedIcon={<VisibilityOff />}
    //       label="Watched"
    //     />
    //     <Checkbox
    //       checked={favorite}
    //       onCheck={this.handleFavoriteChange.bind(this)}
    //       checkedIcon={<ActionFavorite />}
    //       uncheckedIcon={<ActionFavoriteBorder />}
    //       label="Favorite"
    //     />
    //   </Card>
    // )
  }
}

export default Filters
