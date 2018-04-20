import store from './store/index'

App({
  onLaunch: function() {
    wx.login({
      success: res => {
        console.log('登陆成功', res)
        wx.getSetting({ success: res => console.log('获取授权') })
      }
    })
  },
  store
})
