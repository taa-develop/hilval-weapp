import { observer, mapStore } from '../../store/tools'
import { navTo } from '../../utils/index'

const app = mapStore('App')
const user = mapStore('User')

Page(
  observer({
    data: {},
    props: {
      app,
      user
    },

    bindGetUserInfo(e) {
      // 授权登陆
      console.log('user info', e)
      if (e.detail.iv) {
        mapStore('User').signIn()
        console.log('已授权')
        // wx.navigateTo({
        //   url: '/pages/login/login'
        // })
      }
    },

    goto: e => {
      if (!app.isLogin) {
        wx.showToast({ title: '请先登陆！', icon: 'none' })
        return
      }
      navTo(e)
    },

    onLoad: function() {
      user.signIn()
    }
  })
)
