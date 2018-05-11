import { observable } from './tools'

class BusinessSelect {
  constructor() {
    observable(this, {
      sort: { name: '排序', value: '' },
      price: {},
      types: [],
      characteristics: []
    })
  }
}

export default new BusinessSelect()
