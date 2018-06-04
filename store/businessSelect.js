import { observable } from './tools'

class BusinessSelect {
  constructor() {
    observable(this, {
      keyword: '',
      sort: { name: '价格由低到高', value: 'asc' },
      price: { id: 'p-0', label: '不限', min: 0, max: 0 },
      types: [],
      characteristics: []
    })
  }
}

export default new BusinessSelect()
