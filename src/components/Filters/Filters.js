import React, { Component } from "react"
import { func } from "prop-types"
import { Card } from "material-ui/Card"
import TextField from "material-ui/TextField"
import Checkbox from "material-ui/Checkbox"
import ActionFavorite from "material-ui/svg-icons/action/favorite"
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border"
import Visibility from "material-ui/svg-icons/action/visibility"
import VisibilityOff from "material-ui/svg-icons/action/visibility-off"
// import FlatButton from "material-ui/FlatButton"

// import { Search } from "../../shared/search"

class Filters extends Component {
  state = { sort: null, search: "", watched: false }

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

  render() {
    const { sort, search, watched } = this.state
    return (
      <Card>
        <select selected={sort} onChange={this.handleChangeSort.bind(this)}>
          <option value={1}>None</option>
          <option value={3}>Recent</option>
          <option value={4}>Popular</option>
        </select>
        <TextField
          hintText="Search"
          onChange={this.handleSearchChange.bind(this)}
          value={search}
        />
        <Checkbox
          checked={watched}
          onCheck={this.handleWatchedChange.bind(this)}
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          label="Watched"
        />
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="favorite"
        />
      </Card>
    )
  }
}

export default Filters
