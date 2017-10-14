import React, { Component } from "react"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { CollectionGrid } from "../../shared/collection"
import MovieCard from "./MovieCard"
import MovieExpanded from "./MovieExpanded"

const movies = [
  {
    title: "Manchester by the sea",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Mother",
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Seven sisters",
    poster:
      "https://media.senscritique.com/media/000017024550/source_big/Seven_Sisters.png"
  },
  {
    title: "Rogue One",
    poster:
      "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5829da0e37c58159b6de49e1/1479137811594/rogue-one-a-star-wars-story-gets-a-radical-imax-poster3"
  },
  {
    title: "The Martian",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/A1%2BFw58qbDL._SY450_.jpg"
  },
  {
    title: "Stranger Things",
    poster:
      "https://i.pinimg.com/736x/d2/52/05/d25205301e8c5ca1964e963ae798e61a--poster-design-art-prints.jpg"
  },
  {
    title: "Arrival",
    poster:
      "https://i.pinimg.com/736x/92/03/f3/9203f38fa1b6f6ba0f9d5a83358c81ca--arrival-movie-poster--movie-posters.jpg"
  },
  {
    title: "Logan",
    poster:
      "http://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_39148.jpg"
  }
]

@asReactiveLoader
class AllMoviesContainer extends Component {
  state = { indexExpanded: null }

  handleExpand = index => {
    this.setState({ indexExpanded: index })
  }
  getChildToDisplay() {
    if (this.state.indexExpanded != null) {
      return React.createElement(MovieExpanded, {
        movie: movies[this.state.indexExpanded]
      })
    }
    return null
  }

  render() {
    const { indexExpanded } = this.state
    return (
      <div>
        <h1>AllMoviesContainer</h1>
        <CollectionGrid childToDisplay={this.getChildToDisplay()}>
          {movies.map((movie, i) => {
            return (
              <MovieCard
                movie={movie}
                key={i}
                onMovieChange={this.handleExpand.bind(this, i)}
                isSelected={i === indexExpanded}
              />
            )
          })}
        </CollectionGrid>
      </div>
    )
  }
}

export default AllMoviesContainer
