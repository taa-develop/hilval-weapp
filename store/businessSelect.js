import { observable } from './tools'

class BusinessSelect {
  constructor() {
    observable(this, {
      keyword: '',
      sort: { name: '默认排序', value: 'def' },
      price: { id: 'p-1', label: '400以下', min: 0, max: 400 },
      types: [],
      characteristics: []
    })
  }
}

export default new BusinessSelect()
