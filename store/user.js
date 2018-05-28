import { observable, mapStore, setStore } from './tools'
import {
  apiGetUserInfo,
  apiGetUserDetail,
  apiImproveUserInfo,
  apiGetUserTraveler
} from '../api/user-info'

class User {
  constructor() {
    observable(this, {
      encryptedData: null,
      iv: null,
      info: {},
      userDetail: {},
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
      // get user info detail
      apiGetUserDetail().then(res => {
        this.userDetail = res.data.data.wechatUserInfo
      })
      // get travelers
      apiGetUserTraveler().then(res => {
        this.userTravelers = res.data.data.userTravelers
      })
    })
  }

  getUserDetail() {
    return new Promise((resolve, reject) => {
      apiGetUserDetail().then(res => {
        if (res.data.data && res.data.data.wechatUserInfo) {
          this.userDetail = { ...res.data.data.wechatUserInfo }
          resolve(res.data.data.wechatUserInfo)
        } else {
          reject(res.data)
        }
      })
    })
  }

  improveUserInfo(params) {
    return new Promise((resolve, reject) => {
      apiImproveUserInfo(params).then(res => {
        if (res.data.improveUserInfo) {
          resolve()
        } else {
          reject(res.data.errors[0].message)
        }
      })
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
