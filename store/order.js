import { observable, mapStore } from './tools'
import { apiCreateOrder } from '../api/order'

class Order {
  constructor() {
    observable(this, {
      orderObj: {}
    })
  }

  createOrder() {
    const homestayId = mapStore('House').currHouseDetail.id
    const days = mapStore('ApplyForm').days
    const orderAmount =
      mapStore('House').currHouseDetail.price * days + mapStore('House').currHouseDetail.deposit
    const intoDay = mapStore('ApplyForm').startDateText
    const queitDay = mapStore('ApplyForm').endDateText
    console.log({ homestayId, orderAmount, intoDay, queitDay })
    apiCreateOrder({ homestayId, orderAmount, intoDay, queitDay })
  }
}

export default new Order()
