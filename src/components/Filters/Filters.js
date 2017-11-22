import React, { Component } from "react"
import { func } from "prop-types"
import { Card } from "material-ui/Card"
// import FlatButton from "material-ui/FlatButton"

// import { Search } from "../../shared/search"

class Filters extends Component {
  state = { sort: null, filters: [], value: 1 }

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

  render() {
    const { sort } = this.state
    return (
      <Card>
        <select selected={sort} onChange={this.handleChangeSort.bind(this)}>
          <option value={1}>None </option>
          <option value={2}>Random</option>
          <option value={3}>Recent</option>
          <option value={4}>Popular</option>
        </select>
      </Card>
    )
  }
}

export default Filters
