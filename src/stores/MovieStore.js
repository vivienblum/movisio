import { parse } from "mobx-models"
import { observable } from "mobx"

import Movie from "./../models/Movie"
import MovieAPI from "./../models/MovieAPI"
import { FetchResource } from "../resources"
import { shuffle } from "../resources/UIResource"
import config from "../config"

class MovieStore {
  allMovies = observable.array([])
  searchMovies = observable.array([])

  getAllMovies() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/movies`)
        .then(data => {
          this.allMovies = parse(data.movies, Movie.schema)
          resolve(this.allMovies)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getSearch(argData) {
    const search = argData.search.replace(" ", "+")
    return new Promise((resolve, reject) => {
      FetchResource.getFromAPI(
        `${config.TMDB_API}search/movie?api_key=${config.TMDB_KEY}&query=${search}`
      )
        .then(data => {
          this.searchMovies = parse(data.results, MovieAPI.schema)
          resolve(this.searchMovies)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  addMovie(movie) {
    this.allMovies.push(movie)
  }

  moviesSortedByRate(movies) {
    return movies.sort((a, b) => {
      return b.rate - a.rate
    })
  }

  moviesSortedByRecent(movies) {
    return movies.sort((a, b) => {
      return b.year - a.year
    })
  }

  moviesSortedByRandom(movies) {
    return shuffle(movies)
  }

  moviesFilteredByOwned(movies, owned = null) {
    switch (owned) {
      case true:
        return movies.filter(movie => {
          return movie.owned
        })
      case false:
        return movies.filter(movie => {
          return !movie.owned
        })
      default:
        return movies.filter(movie => {
          return movie
        })
    }
  }

  moviesFilteredByWatched(movies, watched = null) {
    switch (watched) {
      case true:
        return movies.filter(movie => {
          return movie.watched
        })
      case false:
        return movies.filter(movie => {
          return !movie.watched
        })
      default:
        return movies.filter(movie => {
          return movie
        })
    }
  }

  moviesFilteredByFavorite(movies, favorite = null) {
    switch (favorite) {
      case true:
        return movies.filter(movie => {
          return movie.favorite
        })
      case false:
        return movies.filter(movie => {
          return !movie.favorite
        })
      default:
        return movies.filter(movie => {
          return movie
        })
    }
  }

  moviesFilteredByTilte(movies, title = "") {
    return movies.filter(movie => {
      if (movie.title.indexOf(title) > -1) return movie
    })
  }
}

const movieStore = new MovieStore()
export default movieStore
