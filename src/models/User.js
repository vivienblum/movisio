import { Model, Schema } from 'mobx-models'
import { observable } from 'mobx'
import page from 'page'
// import config from '../config'

class User extends Model {
  @observable username = ''
  @observable name = ''
  @observable email = ''
  @observable password = ''

  retrieve() {

  }

  logout() {
    page('/login')
  }

}
User.schema = new Schema(User)
User.className = 'User'
export default User
