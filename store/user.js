import { observable } from './tools'

class User {
  constructor() {
    observable(this, {
      info: null
    })
  }
  updateInfo(info) {
    this.info = info
  }
}
export default new User()