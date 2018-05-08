import { observable } from './tools'
import apiLogin from '../api/login'

class User {
  constructor() {
    observable(this, {
      isLogin: false,
      info: {},
      token: {},
      code: null
    })
  }
  updateInfo(info) {
    this.info = info
  }
  login() {
    apiLogin(({ userInfo, tokenData, code }) => {
      this.info = userInfo
      this.token[tokenData.tokenHeader] = tokenData.tokenPrefix + tokenData.token
      this.code = code
      console.log(this)
    })
  }
}
export default new User()
