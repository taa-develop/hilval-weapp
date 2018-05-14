import gql from '../utils/nanographql'
import { baesUrl } from '../utils/http'

function getToken(data, sCallback, eCallback) {
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
        // tokenObj:{token,tokenHeader,tokenPrefix}
        sCallback(res.data.data.login)
      }
    },
    fail: err => {
      if (eCallback) {
        eCallback(err)
      }
    }
  })
}

function saveUserInfo(tokenObj, info) {
  const str = `
    mutation ($info:AuthWechatUserRequest){
      authWechatUser(request:$info)
    }
  `
  const token = {}
  token[tokenObj.tokenHeader] = tokenObj.tokenPrefix + tokenObj.token
  wx.request({
    url: baesUrl,
    data: gql(str)({ info: { encryptedData: info.encryptedData, iv: info.iv } }),
    method: 'POST',
    header: token,
    success: res => {
      console.log(res)
    }
  })
}

function apiLogin(successCallback, errorCallback) {
  let data = {}
  wx.login({
    success: loginResult => {
      console.log('登陆成功')
      data.code = loginResult.code
      wx.getLocation({
        type: 'wgs84',
        success: locRes => {
          console.log('已授权位置信息', locRes)
          data.lon = locRes.longitude
          data.lat = locRes.latitude
          getToken(
            data,
            tokenObj => {
              if (successCallback) {
                successCallback(tokenObj)
              }
              wx.getSetting({
                success: settingRes => {
                  if (settingRes.authSetting['scope.userInfo']) {
                    // 已授权
                    wx.getUserInfo({
                      success: userRes => {
                        console.log('已获取用户信息')
                        const info = { encryptedData: userRes.encryptedData, iv: userRes.iv }
                        saveUserInfo(tokenObj, info)
                        if (successCallback) {
                          successCallback(null, info)
                        }
                      }
                    })
                  }
                }
              })
            },
            errorCallback
          )
        }
      })
    }
  })
}

export { saveUserInfo, apiLogin }
