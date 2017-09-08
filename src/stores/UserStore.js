import { observable } from 'mobx'
import User from 'models/User'
import { FetchResource } from 'resources'
import Cookie from 'js-cookie'
import page from 'page'
import config from '../config'

class UserStore {
  @observable user = new User()

  login(argData) {
    // return new Promise((resolve, reject) => {
    //   FetchResource.post(`${config.USERS_API}/auth/auth_token`, argData)
    //     .then(data => {
    //       Cookie.set('mf_token', data.jwt)
    //       setTimeout(() => { page('/portfolio') }, 500)
    //       resolve(data)
    //     }).catch(err => {
    //       reject(err)
    //     })
    // })
  }

  signUp(argData) {
    // return new Promise((resolve, reject) => {
    //   FetchResource.post(`${config.USERS_API}/users`, argData)
    //     .then(data => {
    //       Cookie.set('mf_token', data.jwt)
    //       setTimeout(() => { page('/portfolio') }, 500)
    //       resolve(data)
    //   }).catch(err => {
    //     reject(err)
    //   })
    // })
  }
}

const userStore = new UserStore()
export default userStore
