import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import styled from "styled-components"
// import { func } from "prop-types"

@asReactiveLoader
class MovieExpanded extends Component {
  static propTypes = {
    // onClick: func.isRequired
  }

  render() {
    const { movie } = this.props
    return (
      <MovieExpandedContainer>
        <Poster src={movie.poster} />
        <Details>
          <Action>Action list</Action>
          <Title>{movie.title}</Title>
          <Info>
            <Rate>{movie.rate}</Rate>
            <Year>{movie.year}</Year>
            <Runtime>{movie.runtime}</Runtime>
          </Info>
          <Plot>{movie.plot}</Plot>
        </Details>
      </MovieExpandedContainer>
    )
  }
}

const MovieExpandedContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: white;
`
const Poster = styled.img`
  width: 200px;
  height: 300px;
`
const Details = styled.div`
  padding: 10px;
  max-width: 50%;
`
const Action = styled.div``
const Title = styled.h2``
const Info = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 60%;
  justify-content: space-between;
  margin-bottom: 10px;
`
const Rate = styled.span``
const Year = styled.span``
const Runtime = styled.span`display: none;`
const Plot = styled.p``

export default MovieExpanded
