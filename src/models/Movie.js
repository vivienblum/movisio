import { Model, Schema } from "mobx-models"
import { FetchResource } from "../resources"
import config from "../config"

class Movie extends Model {
  title = ""
  runtime = null
  rate = null
  year = null
  poster = ""
  plot = ""

  getCorrectFormat() {
    return {
      title: this.title,
      runtime: this.runtime,
      rate: this.rate,
      year: this.year,
      poster: this.poster,
      plot: this.plot
    }
  }

  create() {
    return new Promise((resolve, reject) => {
      console.log(this.getCorrectFormat())
      FetchResource.post(`${config.MOVISIO_API}/movies`, {
        movie: this.getCorrectFormat()
      })
        .then(data => {
          // console.log(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
Movie.schema = new Schema(Movie)
Movie.className = "Movie"
export default Movie
