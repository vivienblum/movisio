import Cookie from "js-cookie"
import User from "./../models/User"
import { FetchResource } from "../resources"

import page from "page"
import config from "../config"

class UserStore {
  /*@observable*/ user = new User()

  login(argData) {
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/users/login_token`, argData)
        .then(data => {
          Cookie.set("mv_token", data.jwt)
          setTimeout(() => {
            page("/movies")
          }, 500)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  signUp(argData) {
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/users`, argData)
        .then(data => {
          Cookie.set("mv_token", data.user.auth_token)
          setTimeout(() => {
            page("/movies")
          }, 500)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const userStore = new UserStore()
export default userStore
