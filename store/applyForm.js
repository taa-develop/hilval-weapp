import { observable } from './tools'

class applyForm {
  constructor() {
    const time = new Date()
    const y = time.getFullYear()
    const m = time.getMonth()
    const d = time.getDate()
    observable(this, {
      place: '',
      location: { name: '未获取定位' },
      checkIn: new Date(y, m, d).getTime(),
      checkOut: new Date(y, m, d + 1).getTime(),
      people: { text: '1人', val: 1 },
      get checkInText() {
        const t = new Date(this.checkIn)
        return `${t.getMonth() + 1}月 ${t.getDate()}日`
      },
      get checkOutText() {
        const t = new Date(this.checkOut)
        return `${t.getMonth() + 1}月 ${t.getDate()}日`
      }
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
