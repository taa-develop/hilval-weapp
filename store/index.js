import { observable } from './tools'
import App from './app'
import User from './user'
import ApplyForm from './applyForm'
import BusinessSelect from './businessSelect'
import House from './house'
import Order from './order'

class Store {
  constructor() {
    observable(this, {
      App,
      User,
      ApplyForm,
      BusinessSelect,
      House,
      Order
    })
  }
}
export default new Store()
