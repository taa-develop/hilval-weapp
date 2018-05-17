import { query, mutation } from '../utils/http'
import { mapStore } from '../store/tools'

function apiCreateOrder(
  params = { homestayId: '1', orderAmount: 0, intoDay: '2018-01-01', queitDay: '2018-01-02' }
) {
  const str = `
    ($request:OrderCreateInput!){
      createOrder(request:$request){
        orderNumber
        homestay{
          id
          name
        }
        totalAmount
        realAmount
        orderStatus
        payStatus
      }
    }
  `
  const token = mapStore('App').token
  return mutation(token, str, { request: params })
}

export { apiCreateOrder }
