import { query, mutation } from '../utils/http'
import { mapStore } from '../store/tools'

function apiCreateOrder(
  params = { homestayId: 1, orderAmount: 0, intoDay: '2018-01-01', queitDay: '2018-01-02' }
) {
  const str = `
    ($request:OrderCreateInput!){
      createOrder(request:$request){
        orderNumber
        homestay{
          id
          name
          price
          deposit
        }
        orderNumber
        totalAmount
        realAmount
        orderStatus
        payStatus
        intoDatetime
        queitDatetime
      }
    }
  `
  const token = mapStore('App').token
  return mutation(token, str, { request: params })
}

function apiGetOrderList(params) {
  const str = `
    ($request:OrderListRequest!){
      orderList(request:$request){
        page{
          hasNext
        }
        datas{
          rownum
          orderNumber
          homestay{
            id
            name
            picture
            area
          }
          intoDatetime
          queitDatetime
          totalAmount
          orderStatus
          payStatus
          housingStatus
          comfirmStatus
        }
      }
    }
  `
  const token = mapStore('App').token
  return query(token, str, {
    request: { page: { pageNumber: 1, ...params.page }, type: params.type || 1 }
  })
}

function apiGetOrderDetail(orderId) {
  const str = `
  ($orderNumber:String!){
    orderDetail(orderNumber:$orderNumber){
      orderNumber
      totalAmount
      realAmount
      intoDatetime
      queitDatetime
      homestay{
        id
        name
        picture
        price
        deposit
      }
    }
  }`
  const token = mapStore('App').token
  return query(token, str, { orderNumber: orderId })
}

function apiPayOrder(
  params = {
    orderNumber: '',
    payAmount: 0,
    intoDay: '2018-01-01',
    queitDay: '2018-01-02',
    travelers: []
  }
) {
  const str = `
  ($request:OrderPayInput!){
    payOrder(request:$request){
      timeStamp
      nonceStr
      payPackage
      paySign
      signType
    }
  }`
  const token = mapStore('App').token
  return mutation(token, str, { request: params })
}

function apiDeleteOrder(orderNumber) {
  const str = `
  ($orderNumber:String!){
    cancelOrder(orderNumber:$orderNumber)
  }
  `
  const token = mapStore('App').token
  return mutation(token, str, { orderNumber })
}

export { apiCreateOrder, apiGetOrderList, apiGetOrderDetail, apiPayOrder, apiDeleteOrder }
