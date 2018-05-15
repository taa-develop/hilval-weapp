import { observable, mapStore, setStore } from './tools'
import { apiGetUserInfo } from '../api/user-info'

class User {
  constructor() {
    observable(this, {
      encryptedData: null,
      iv: null,
      info: {}
    })
  }

  signIn() {
    apiGetUserInfo().then(res => {
      this.encryptedData = res.encryptedData
      this.iv = res.iv
      this.info = { ...res.userInfo }
      if (!mapStore('App').isLogin) {
        setStore(mapStore('App'), { isLogin: true })
      }
    })
  }
}
export default new User()
