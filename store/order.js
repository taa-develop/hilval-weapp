import { observable, mapStore } from './tools'
import { apiCreateOrder, apiGetOrderList, apiGetOrderDetail, apiPayOrder } from '../api/order'

const mapOrder = [
  { type: 1, name: 'Unpaid' },
  { type: 2, name: 'Unstarted' },
  { type: 3, name: 'History' }
]

// 将获取的原始数据转换为UI使用的数据，添加入住日期，退房日期和入住天数
const mutateList = res =>
  res.data.data.orderList.datas.map(o => {
    const startDate = o.intoDatetime.split(' ')[0].split('-')
    const endDate = o.queitDatetime.split(' ')[0].split('-')
    const startY = startDate[0]
    const startM = startDate[1]
    const startD = startDate[2]
    const endY = endDate[0]
    const endM = endDate[1]
    const endD = endDate[2]
    const days =
      (new Date(endY, endM, endD).getTime() - new Date(startY, startM, startD).getTime()) /
      (1000 * 60 * 60 * 24)
    return {
      ...o,
      homestay: { ...o.homestay, picture: `https://source.hilval.com/${o.homestay.picture}` },
      startDateText: `${startM}月${startD}日`,
      endDateText: `${endM}月${endD}日`,
      days
    }
  })

class Order {
  constructor() {
    observable(this, {
      currPayingOrder: {},
      ordersUnpaid: {},
      ordersUnstarted: {},
      ordersHistory: {}
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
    return new Promise((resolve, reject) => {
      apiCreateOrder({ homestayId, orderAmount, intoDay, queitDay }).then(res => {
        // 创建订单之后，将此订单设置为当前需要支付的订单
        if (!!res.data.data && !!res.data.data.createOrder) {
          console.log('order had handing', { ...res.data.data.createOrder })
          this.currPayingOrder = { ...res.data.data.createOrder }
          resolve()
        } else {
          console.log('错误', res)
          let msg = res.data.errors[0].message || '系统错误'
          reject(msg)
        }
      })
    })
  }

  getOrders(orderType) {
    const orderObj = mapOrder.find(v => v.type === orderType)
    apiGetOrderList({ page: {}, type: orderObj.type }).then(res => {
      this[`orders${orderObj.name}`] = {
        datas: mutateList(res),
        page: res.data.data.orderList.page
      }
    })
  }

  getMoreOrders(orderType) {
    const orderObj = mapOrder.find(v => (v.type = orderType))
    if (this[`orders${orderObj.name}`].page.hasNext) {
      // 通过lastNum来得知后面的数据从哪个开始
      const lastNum = [...this[`orders${orderObj.name}`].datas].pop().rownum
      apiGetOrderList({ page: { lastRownum: lastNum }, type: orderObj.type }).then(res => {
        this[`orders${orderObj.name}`] = {
          datas: [...this[`orders${orderObj.name}`].datas, ...mutateList(res)],
          page: res.data.data.orderList.page
        }
      })
    }
  }

  payOrderNow(params) {
    return new Promise((resolve, reject) => {
      apiPayOrder(params).then(res => {
        if (!!res.data && !!res.data.payOrder) {
          resolve()
        } else {
          reject(res.errors[0].message)
        }
      })
    })
  }

  payOrderFromList(orderNumber) {
    // 在未支付订单列表里点击‘马上支付’
  }
}

export default new Order()
