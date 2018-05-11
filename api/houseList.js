import { query } from '../utils/http'
import { mapStore } from '../store/tools'
const token = mapStore('User').token

function apiGetHouseList(success, fail) {
  const str = `
    {
      queryHouseType{
        id
        label
        code
      }
    }
  `
  query(token, str)
}

export { apiGetHouseList }
