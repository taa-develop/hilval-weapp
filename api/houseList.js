import { query } from '../utils/http'
import store from '../store/index'

function apiGetHouseList(success, fail) {
  const str = `
    {
      list(){
        id
        name
        price
      }
    }
  `
  console.log('token obj ===>', store.User.token)
  query(store.User.token, str, success, fail)
}

export { apiGetHouseList }
