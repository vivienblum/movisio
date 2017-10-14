import React, { Component } from "react"
import styled from "styled-components"
import AutoComplete from "material-ui/AutoComplete"

export default class SearchMovie extends Component {
  state = { search: "", dataSource: ["movie1", "movie2"] }

  handleUpdateInput(search) {
    // console.log(e)
    // const search = e.target.value
    const dataSource = this.state.dataSource
    dataSource.push("new")
    this.setState({ search, dataSource })
  }

  render() {
    const { search, dataSource } = this.state
    return (
      <SearchContainter>
        <AutoComplete
          hintText="Movie"
          dataSource={dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          value={search}
        />
      </SearchContainter>
    )
  }
}

const SearchContainter = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
