import React, { Component } from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import FlatButton from "material-ui/FlatButton"

import { Search } from "../../shared/search"

class Filters extends Component {
  state = { sort: 3 }

  handleChangeSort(sort) {
    this.setState({ sort })
  }

  render() {
    const { sort } = this.state
    return (
      <Card style={{ minHeight: "200px" }}>
        <SelectField
          floatingLabelText="Sort"
          value={sort}
          onChange={this.handleChangeSort.bind(this)}
        >
          <MenuItem value={1} primaryText="None" />
          <MenuItem value={2} primaryText="Random" />
          <MenuItem value={3} primaryText="Recent" />
          <MenuItem value={4} primaryText="Popular" />
        </SelectField>
      </Card>
    )
  }
}

export default Filters
