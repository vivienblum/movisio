import React, { Component } from "react"
import { func } from "prop-types"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
// import { observer } from "mobx-react"
import "./styles/Search.scss"

// @observer
export default class Search extends Component {
  state = { search: "" }

  static propTypes = {
    onSearch: func.isRequired
  }

  handleUpdateInput(e) {
    const search = e.target.value
    this.setState({ search })
  }

  render() {
    const { children, onSearch } = this.props
    const { search } = this.state
    return (
      <div className="search-container">
        <div className="field">
          <TextField
            hintText="Movie"
            onChange={this.handleUpdateInput.bind(this)}
            value={search}
          />
          <FlatButton
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            label="Search"
            onClick={onSearch.bind(this, search)}
          />
        </div>
        <div className="result">{children}</div>
      </div>
    )
  }
}
