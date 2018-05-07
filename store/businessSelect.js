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
  set(options) {
    const obj = this
    Object.keys(options).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = options[key]
      }
    })
  }
}

export default new BusinessSelect()
