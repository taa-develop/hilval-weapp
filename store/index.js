import { observable } from './tools'
import User from './user'

class Store {
  constructor() {
    observable(this, {
      User
    })
  }
}
export default new Store()
