import { observable } from "mobx"
import User from "./../models/User"
import { FetchResource } from "../resources"
import Cookie from "js-cookie"
import config from "../config"

class UserStore {
  @observable user = new User()

  login(argData) {
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/users/login_token`, argData)
        .then(data => {
          Cookie.set("mv_token", data.jwt)
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
          Cookie.set("mv_token", data.jwt)
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

const userStore = new UserStore()
export default userStore
