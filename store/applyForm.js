import { observable } from './tools'

class applyForm {
  constructor() {
    observable(this, {
      place: '',
      location: { name: '未获取定位' },
      checkIn: '',
      checkOut: '',
      people: { label: '1人', val: 1 }
    })
  }
  update(options) {
    const obj = this
    Object.keys(options).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = options[key]
      }
    })
  }
}
export default new applyForm()
