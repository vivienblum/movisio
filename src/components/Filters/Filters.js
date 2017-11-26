import React, { Component } from "react"
import { func } from "prop-types"
import { Card } from "material-ui/Card"
import TextField from "material-ui/TextField"
// import FlatButton from "material-ui/FlatButton"

// import { Search } from "../../shared/search"

class Filters extends Component {
  state = { sort: null, search: "" }

  static propTypes = {
    onChangeSort: func.isRequired,
    onChangeFilters: func.isRequired
  }

  handleSearchChange(e) {
    const search = e.target.value
    this.setState({ search }, () => {
      this.props.onChangeFilters(this.state.search, "search")
    })
  }

  handleChangeSort(e) {
    const sort = e.target.value
    this.setState({ sort }, () => {
      this.props.onChangeSort(this.state.sort)
    })
  }

  render() {
    const { sort, search } = this.state
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
      </Card>
    )
  }
}

export default Filters
