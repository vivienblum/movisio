import { parse } from "mobx-models"
import { observable } from "mobx"
// import Movie from "./../models/Movie"
import MovieAPI from "./../models/MovieAPI"
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
          this.searchMovies = parse(data.results, MovieAPI.schema)
          resolve(this.searchMovies)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const movieStore = new MovieStore()
export default movieStore
