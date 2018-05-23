import { observable } from './tools'
import { apiLogin } from '../api/login'

class App {
  constructor() {
    observable(this, {
      isLogin: false,
      firstIn:true,
      token: {}
    })
  }
  login() {
    apiLogin((tokenObj, infoObj) => {
      if (tokenObj) {
        this.token[tokenObj.tokenHeader] = `${tokenObj.tokenPrefix}${tokenObj.token}`
      }
      if (infoObj) {
        this.isLogin = true
      }
    })
  }
}
export default new App()
