import { Model, Schema } from "mobx-models"

class Movie extends Model {
  title = ""
  runtime = null
  rate = null
  year = null
  poster = ""
  plot = ""
}
Movie.schema = new Schema(Movie)
Movie.className = "Movie"
export default Movie
