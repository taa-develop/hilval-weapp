import gql from '../utils/nanographql'
import { baesUrl } from '../utils/http'

function getInfo(code, sCallback, eCallback) {
  console.log('debug get user info')
  const data = { code }
  wx.getUserInfo({
    success: infoResult => {
      console.log('get user info success')
      data.encryptedData = infoResult.encryptedData
      data.iv = infoResult.iv
      wx.getLocation({
        type: 'wgs84',
        success: locResult => {
          console.log('get location success')
          data.lat = locResult.latitude
          data.lon = locResult.longitude
          getToken(data, infoResult.userInfo, sCallback)
        }
      })
    }
  })
}

function getToken(data, userInfo, sCallback, eCallback) {
  const str = `
  mutation ($data:LoginRequest!){
    login(loginRequest:$data){
      token
      tokenHeader
      tokenPrefix
    }
  }`
  wx.request({
    url: baesUrl,
    data: gql(str)({ data }),
    method: 'POST',
    success: res => {
      console.log('get token success')
      if (sCallback) {
        sCallback({ userInfo, tokenData: res.data.data.login, code: data.code })
      }
    },
    fail: err => {
      if (eCallback) {
        eCallback(err)
      }
    }
  })
}

export default function apiLogin(successCallback, errorCallback) {
  wx.login({
    success: loginResult => {
      wx.getSetting({
        success: settingRes => {
          if (
            settingRes.authSetting['scope.userInfo'] &&
            settingRes.authSetting['scope.userLocation']
          ) {
            getInfo(loginResult.code, successCallback)
          } else {
            // 未授权时,重新请求授权
            console.log('未授权')
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                console.log('授权 用户信息')
              }
            })
          }
        }
      })
    }
  })
}

// wx.login({
//   success: function(res) {
//     wx.getSetting({
//       success(setRes) {
//         // 判断是否已授权
//         if (!setRes.authSetting['scope.userInfo']) {
//           // 授权访问
//           wx.authorize({
//             scope: 'scope.userInfo',
//             success() {
//               //获取用户信息
//               wx.getUserInfo({
//                 success: function(userRes) {
//                   //发起网络请求
//                 }
//               })
//             }
//           })
//         } else {
//           //获取用户信息
//           wx.getUserInfo({
//             lang: 'zh_CN',
//             success: function(userRes) {
//               //发起网络请求
//               wx.request({
//                 url: config.loginWXUrl,
//                 data: {
//                   code: res.code,
//                   encryptedData: userRes.encryptedData,
//                   iv: userRes.iv
//                 },
//                 header: {
//                   'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 method: 'POST',
//                 success: function(result) {
//                   var data = result.data.result
//                   data.expireTime = nowDate + EXPIRETIME
//                   wx.setStorageSync('userInfo', data)
//                   userInfo = data
//                 }
//               })
//             }
//           })
//         }
//       }
//     })
//   }
// })
