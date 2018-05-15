import { observable } from './tools'
import App from './app'
import User from './user'
import ApplyForm from './applyForm'
import BusinessSelect from './businessSelect'
import House from './house'

class Store {
  constructor() {
    observable(this, {
      App,
      User,
      ApplyForm,
      BusinessSelect,
      House
    })
  }
}
export default new Store()
