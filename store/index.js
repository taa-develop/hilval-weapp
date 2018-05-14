import { observable } from './tools'
import App from './app'
import User from './user'
import ApplyForm from './applyForm'
import BusinessSelect from './businessSelect'

class Store {
  constructor() {
    observable(this, {
      App,
      User,
      ApplyForm,
      BusinessSelect
    })
  }
}
export default new Store()
