import { observable } from './tools'
import { apiLogin } from '../api/login'

class App {
  constructor() {
    observable(this, {
      isLogin: false,
      token: {},
      code: null
    })
  }
  login() {
    apiLogin()
  }
}
export default new App()
