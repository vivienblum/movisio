import { Model, Schema } from 'mobx-models'
import Cookie from 'js-cookie'
import { observable } from 'mobx'
import page from 'page'
import config from '../config'

class User extends Model {
}
User.schema = new Schema(User)
User.className = 'User'
export default User
