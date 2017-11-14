import { Model, Schema, parse } from "mobx-models"
import { observable } from "mobx"
import Cookie from "js-cookie"
import page from "page"
import { FetchResource } from "../resources"
import config from "../config"
import Movie from "./Movie"

class User extends Model {
  id = null
  /*@observable*/ username = ""
  name = ""
  email = ""
  password = ""
  movies = observable.array([])

  retrieve() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/current`)
        .then(data => {
          const userSchema = new Schema(User)
          const parsed = userSchema.parseRaw(data)
          Object.assign(this, parsed)
          this.getMovies()
          // this.getMyMovies()
          // this.getAllMovies()
          resolve(this)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /** @deprecated */
  getAllMovies() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/movies`)
        .then(data => {
          const movieSchema = new Schema(Movie)
          const parsed = movieSchema.parseRaw(data.movies)
          Object.assign(this.allMovies, parsed)
          resolve(this.allMovies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  /** @deprecated */
  getMyMovies() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/${this.id}/movies`)
        .then(data => {
          // const movieSchema = new Schema(Movie)
          // const parsed = movieSchema.parseRaw(data.movies)
          //
          // Object.assign(this.movies, parsed)
          this.movies = parse(data.movies, Movie.schema)
          // console.log(this.movies)
          resolve(this.movies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getMovies() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/movies/all`)
        .then(data => {
          const movieSchema = new Schema(Movie)
          const parsed = movieSchema.parseRaw(data.movies)
          Object.assign(this.movies, parsed)
          resolve(this.movies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  addMovieToAll(movie) {
    this.movies.push(movie)
  }

  addMovie(movie) {
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/users/movies`, movie)
        .then(data => {
          let id
          this.movies.forEach((movie, i) => {
            if (movie.id === data.movie.id) {
              id = i
            }
          })
          this.movies[id] = data.movie
          resolve(this.movies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get moviesSortedByRate() {
    return this.movies.sort((a, b) => {
      return b.rate - a.rate
    })
  }

  get moviesSortedByRandom() {}

  setMovieWatched(idMovie, argData) {
    return new Promise((resolve, reject) => {
      FetchResource.put(
        `${config.MOVISIO_API}/users/movies/watched/${idMovie}`,
        argData
      )
        .then(data => {
          let id
          this.movies.forEach((movie, i) => {
            if (movie.id === data.movie.id) {
              id = i
            }
          })
          this.movies[id] = data.movie
          resolve(this.movies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  setMovieFavorite(idMovie, argData) {
    return new Promise((resolve, reject) => {
      FetchResource.put(
        `${config.MOVISIO_API}/users/movies/favorite/${idMovie}`,
        argData
      )
        .then(data => {
          let id
          this.movies.forEach((movie, i) => {
            if (movie.id === data.movie.id) {
              id = i
            }
          })
          this.movies[id] = data.movie
          resolve(this.movies)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  logout() {
    Cookie.remove("mv_token")
    page("/")
  }
}
User.schema = new Schema(User)
User.className = "User"
export default User
