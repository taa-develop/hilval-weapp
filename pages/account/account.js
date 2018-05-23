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

    getUserInfo(e) {
      console.log('授权登陆',e)
      if (e.detail.iv) {
        mapStore('User').signIn()
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
