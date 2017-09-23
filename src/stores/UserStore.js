import { observable } from 'mobx'
import User from './../models/User'
import { FetchResource } from '../resources'
import Cookie from 'js-cookie'
import config from '../config'

class UserStore {
  @observable user = new User()

  login(argData) {
    return new Promise((resolve, reject) => {
      FetchResource.post(`${config.MOVISIO_API}/login_token`, argData)
        .then(data => {
          Cookie.set('mf_token', data.jwt)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  }

  signUp(argData) {

  }
}

const userStore = new UserStore()
export default userStore
