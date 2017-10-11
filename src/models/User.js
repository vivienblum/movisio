import { Model, Schema } from "mobx-models"
import { observable } from "mobx"
import Cookie from "js-cookie"
import page from "page"
import { FetchResource } from "../resources"
import config from "../config"

class User extends Model {
  @observable username = ""
  @observable name = ""
  @observable email = ""
  @observable password = ""

  retrieve() {
    return new Promise((resolve, reject) => {
      FetchResource.get(`${config.MOVISIO_API}/users/current`)
        .then(data => {
          const userSchema = new Schema(User)
          const parsed = userSchema.parseRaw(data.user)
          Object.assign(this, parsed)
          resolve(this)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  logout() {
    Cookie.remove("mv_token")
    page("/login")
  }
}
User.schema = new Schema(User)
User.className = "User"
export default User
