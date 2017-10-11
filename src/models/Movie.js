import { Model, Schema } from "mobx-models"
import { observable } from "mobx"

class Movie extends Model {
  @observable title = ""
  @observable test = "sdfsdfsdfds"
}
Movie.schema = new Schema(Movie)
Movie.className = "Movie"
export default Movie
