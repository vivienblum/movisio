import { Schema } from "mobx-models"
import config from "../config"
import Movie from "./Movie"

class MovieAPI extends Movie {
  constructor(attributes) {
    super(attributes)
    this.poster = `${config.POSTER_PATH}${attributes.poster_path}`
    // TODO this.runtime = attributes.runtime
    this.rate = attributes.vote_average
    this.plot = attributes.overview
    this.year = parseInt(attributes.release_date, 10)
  }
}
MovieAPI.schema = new Schema(MovieAPI)
MovieAPI.className = "MovieAPI"
export default MovieAPI
