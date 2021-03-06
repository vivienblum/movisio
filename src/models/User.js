import { Model, Schema, parse } from "mobx-models"
import { extendObservable } from "mobx"
import Cookie from "js-cookie"
import page from "page"
import { FetchResource } from "../resources"
import config from "../config"
import Movie from "./Movie"

class User extends Model {
  constructor() {
    super()
    extendObservable(this, {
      username: "",
      movies: []
    })
  }
  id = null
  name = ""
  email = ""
  password = ""

  retrieve() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/current`)
        .then(data => {
          const userSchema = new Schema(User)
          const parsed = userSchema.parseRaw(data)
          Object.assign(this, parsed)
          this.getMovies()
          resolve(this)
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
          this.movies = parse(data.movies, Movie.schema)
          resolve(this)
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

  removeMovie(idMovie) {
    return new Promise((resolve, reject) => {
      FetchResource.delete(`${config.MOVISIO_API}/users/movies/${idMovie}`)
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
