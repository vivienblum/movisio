import { Model, Schema } from "mobx-models"
import { observable } from "mobx"
import config from "../config"

class Movie extends Model {
  @observable title = ""
  get posterFromApi() {
    return `${config.POSTER_PATH}${this.poster_path}`
  }
}
Movie.schema = new Schema(Movie)
Movie.className = "Movie"
export default Movie
