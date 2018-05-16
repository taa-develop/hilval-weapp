import { query, mutation } from '../utils/http'
import { mapStore } from '../store/tools'
import { baesUrl } from '../utils/http'

function saveUserInfo(info) {
  const str = `
    mutation ($info:AuthWechatUserRequest){
      authWechatUser(request:$info)
    }
  `
  const token = mapStore('App').token
  query(token, str, { info: { encryptedData: info.encryptedData, iv: info.iv } })
}

function apiGetUserInfo() {
  return new Promise((resolve, reject) => {
    try {
      wx.getSetting({
        success: settingRes => {
          if (settingRes.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: info => {
                if (!mapStore('App').isLogin) {
                  saveUserInfo(info)
                }
                resolve(info)
              },
              fail: err => reject(err)
            })
          }
        }
      })
    } catch (err) {
      console.log(err)
    }
  })
}

// 出行人管理
function apiAddUserTraveler(data) {
  const str = `
    ($input:UserTravelerInput!){
    addUserTraveler(input: $input){
      id
      createTime
      updateTime
      name
      countryCode
      mobile
      identityType
      identityNumber
      email
      status
    }
  }`
  const token = mapStore('App').token
  return mutation(token, str, { input: data })
}

function apiGetUserTraveler() {
  const str = `
  {
    userTravelers{
      id
      createTime
      updateTime
      name
      countryCode
      mobile
      identityType
      identityNumber
      email
      status
    }
  }
  `
  const token = mapStore('App').token
  return query(token, str)
}

function apiGetTravelerDetail(id) {
  const str = `
    ($id:Long!){
    userTravelerInfo(id:$id){
      id
      createTime
      updateTime
      name
      countryCode
      mobile
      identityType
      identityNumber
      email
      status
    }
  }`
  const token = mapStore('App').token
  return query(token, str, { id })
}

function apiEditTraveler(data) {
  const str = `
    ($input:UserTravelerInput!){
    updateUserTraveler(input:$input)
  }`
  const token = mapStore('App').token
  return mutation(token, str, { input: data })
}

function apiDeleteTraveler(id) {
  const str = `
  ($id:Long!){
    deleteUserTraveler(id:$id)
  }`
  const token = mapStore('App').token
  return mutation(token, str, { id })
}

export {
  apiGetUserInfo,
  apiAddUserTraveler,
  apiGetUserTraveler,
  apiGetTravelerDetail,
  apiEditTraveler,
  apiDeleteTraveler
}
