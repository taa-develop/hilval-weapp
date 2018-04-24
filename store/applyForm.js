import { observable } from './tools'

class applyForm {
  constructor() {
    observable(this, {
      place: '',
      checkIn: '',
      checkOut: '',
      people: { label: '1人', val: 1 }
    })
  }
  update(key, val) {
    this[key] = val
  }
}
export default new applyForm()
