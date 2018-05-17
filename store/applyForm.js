import { observable } from './tools'
import { dateFormat } from '../utils/index'

class applyForm {
  constructor() {
    const time = new Date()
    const y = time.getFullYear()
    const m = time.getMonth()
    const d = time.getDate()
    observable(this, {
      place: '',
      startDate: new Date(y, m, d).getTime(),
      endDate: new Date(y, m, d + 1).getTime(),
      peopleIndex: 0,
      travelers: [],
      get startDateText() {
        const t = new Date(this.startDate)
        return dateFormat(t)
      },
      get endDateText() {
        const t = new Date(this.endDate)
        return dateFormat(t)
      },
      get days() {
        return (this.endDate - this.startDate) / (1000 * 60 * 60 * 24)
      }
    })
  }
}
export default new applyForm()
