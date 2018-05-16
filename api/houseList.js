import gql from '../utils/nanographql'
import { query } from '../utils/http'
import { mapStore } from '../store/tools'

function apiGetHouseList(request) {
  const str = `($request:HomestayQueryRequest){
    queryHomestays(request:$request){
      page {
        hasNext
      }
      datas{
        id
        rownum
        name
        picture
        price
        dictHouseType{
          type
          label
        }
      }
    }
  }`
  const params = { request: { page: { pageSize: 10 }, ...request } }
  const token = mapStore('App').token
  return query(token, str, params)
}

function apiGetHouseDetail(id = 1) {
  const str = `
    ($id:Long!){
      homestayDetail(id:$id){
        id
        name
        address
        picture
        feature
        houseNumber
        area
        fitPeopleQuantity
        lon
        lat
        intoTime
        queitTime
        receiveStartTime
        receiveEndTime
        receiveSex
        leastOrderDates
        intoBeforTime
        cancelOrderCost
        deposit
        price
        installations{
          name
        }
      }
    }
  `
  const params = { id }
  const token = mapStore('App').token
  return query(token, str, params)
}

function apiGetHouseTypes() {
  const str = `{
    queryHouseType{
      id
      label
      code
      type
    }
  }`
  const token = mapStore('App').token
  return query(token, str)
}
export { apiGetHouseList, apiGetHouseDetail, apiGetHouseTypes }
