// 重新封装微信接口
// 1. 登陆 获取code
function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => resolve({ code: res.code }),
      fail: err => reject(err)
    })
  })
}

// 2. 获取用户信息.主要为后台需要的[信息加密字符串,加密向量],和前台需要的用户账户信息[昵称,所在地,头像,性别]
function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res =>
        resolve({
          userInfo: {
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
            gender: res.userInfo.gender,
            city: res.userInfo.city,
            province: res.userInfo.province,
            country: res.userInfo.country,
            language: res.userInfo.language
          },
          encryptedData: res.encryptedData,
          iv: res.iv
        }),
      fail: err => reject(err)
    })
  })
}

// 3. 获取用户当前位置,经纬度
function getLocation() {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: res => resolve({ lat: res.latitude, lon: res.longitude }),
      fail: err => reject(err)
    })
  })
}

// 4. 向后台请求token
function getTokenObj() {
  const str = `
  mutation ($data:LoginRequest!){
    login(loginRequest:$data){
      token
      tokenHeader
      tokenPrefix
    }
  }`
  return new Promise((resolve, reject) => {
    wx.request({
      url: baesUrl,
      data: {},
      method: 'POST',
      success: function(res) {
        // success
      },
      fail: function() {
        // fail
      }
    })
  })
}

// 5. 启动请求
async function begin() {
  let requestParams = {}
  await login()
  await getUserInfo()
  await getLocation()
  console.log(requestParams)
}
