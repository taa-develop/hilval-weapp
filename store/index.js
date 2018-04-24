import { observable } from './tools'
import User from './user'
import ApplyForm from './applyForm'

class Store {
  constructor() {
    observable(this, {
      User,
      ApplyForm
    })
  }
}
export default new Store()
