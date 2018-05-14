import gql from '../utils/nanographql'
import { query } from '../utils/http'
import { mapStore } from '../store/tools'
const token = mapStore('User').token

function apiGetHouseList(request) {
  const str = `($request:HomestayQueryRequest){
    queryHomestays(request: $request){
      page {
        pageNumber
        pageSize
        totalCount
        totalPages
        hasNext
      }
      datas{
        id
        name
        picture
        price
      }
    }
  }`
  const params = { request: { page: { pageSize: 10 }, ...request } }
  return query(token, str, params)
}

function getHouseDetail(id = 1) {
  const str = `
    ($id:Long!){
      homestayDetail(id:$id){
        id
        name
        address
        picture
        feature
        lon
        lat
      }
    }
  `
  const params = { id }
  return query(token, str, params)
}
export { apiGetHouseList, getHouseDetail }
