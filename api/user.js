/**
 * @param {Function} s:success callback
 * @param {Function} f:fail callback
 */
import { query } from '../utils/http'
import { mapStore } from '../store/tools'
const token = mapStore('User').token

export default function apiUser(s, f) {
  const str = `{
    user(id:111){
      id
      name
      openId
    }
  }`
  return query(token)
}
