import { query } from '../utils/http'
import { mapStore } from '../store/tools'
const token = mapStore('User').token

function apiGetHouseList(success, fail) {
  const str = `
  {
    queryHomestays(
      request:{page:{pageNumber:1}}
    ){
      page{
        pageNumber
      }
      datas{
        id
      }
    }
  }  `
  query(token, str)
}

export { apiGetHouseList }
