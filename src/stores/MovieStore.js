import { parse } from "mobx-models"
import Movie from "./../models/Movie"
import { observable } from "mobx"
import { FetchResource } from "../resources"
import config from "../config"

class MovieStore {
  @observable searchMovies = observable.array([])

  getSearch(argData) {
    const search = argData.search.replace(" ", "+")
    return new Promise((resolve, reject) => {
      FetchResource.getFromAPI(
        `${config.TMDB_API}search/movie?api_key=${config.TMDB_KEY}&query=${search}`
      )
        .then(data => {
          // setTimeout(() => {
          //   page("/movies")
          // }, 500)
          this.movies = parse(data.results, Movie.schema)
          console.log(this.movies)

          resolve(this.movies)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  signUp(argData) {
    console.log(argData)
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/users`, argData)
        .then(data => {
          // setTimeout(() => {
          //   page("/movies")
          // }, 500)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // initialize() {
  //   return new Promise(() => {
  //     FetchResource.get(`${config.MOVISIO_API}/users/current`).then(data => {
  //       this.user = data
  //     })
  //   })
  // }
}

const movieStore = new MovieStore()
export default movieStore
