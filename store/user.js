import { observable, mapStore, setStore } from './tools'
import { apiGetUserInfo, apiGetUserTraveler } from '../api/user-info'

class User {
  constructor() {
    observable(this, {
      encryptedData: null,
      iv: null,
      info: {},
      userTravelers: []
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

  getTraveler() {
    return new Promise((resolve, reject) => {
      apiGetUserTraveler().then(res => {
        this.userTravelers = res.data.data.userTravelers
        resolve(res.data.data.userTravelers)
      })
    })
  }
}
export default new User()
