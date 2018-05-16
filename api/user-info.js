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
export { apiGetUserInfo, apiAddUserTraveler }
