import { Model, Schema, parse } from "mobx-models"
import { observable } from "mobx"
import Cookie from "js-cookie"
import page from "page"
import { FetchResource } from "../resources"
import config from "../config"
import Movie from "./Movie"

class User extends Model {
  @observable username = ""
  @observable name = ""
  @observable email = ""
  @observable password = ""
  @observable movies = []
  @observable allMovies = observable.array([])

  retrieve() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/current`)
        .then(data => {
          const userSchema = new Schema(User)
          const parsed = userSchema.parseRaw(data)
          Object.assign(this, parsed)
          this.getMyMovies()
          this.getAllMovies()
          resolve(this)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

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

  logout() {
    Cookie.remove("mv_token")
    page("/")
  }
}
User.schema = new Schema(User)
User.className = "User"
export default User
