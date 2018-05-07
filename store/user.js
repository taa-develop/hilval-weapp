import { observable } from './tools'
import apiLogin from '../api/login'

class User {
  constructor() {
    observable(this, {
      isLogin: false,
      info: {},
      token: {}
    })
  }
  updateInfo(info) {
    this.info = info
  }
  login() {
    apiLogin(({ userInfo, tokenData }) => {
      this.info = userInfo
      this.token[tokenData.tokenHeader] = tokenData.tokenPrefix + tokenData.token
    })
  }
}
export default new User()
