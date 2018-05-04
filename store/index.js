import { observable } from './tools'
import User from './user'
import ApplyForm from './applyForm'
import BusinessSelect from './businessSelect'

class Store {
  constructor() {
    observable(this, {
      User,
      ApplyForm,
      BusinessSelect
    })
  }
}
export default new Store()
