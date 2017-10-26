import { Schema } from "mobx-models"
import config from "../config"
import Movie from "./Movie"

class MovieAPI extends Movie {
  constructor(attributes) {
    super(attributes)
    this.poster = `${config.POSTER_PATH}${attributes.poster_path}`
  }
}
MovieAPI.schema = new Schema(MovieAPI)
MovieAPI.className = "MovieAPI"
export default MovieAPI
