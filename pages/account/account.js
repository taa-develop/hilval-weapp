import { observer, mapStore } from '../../store/tools'
import { navTo } from '../../utils/index'
const user = mapStore('User')

Page(
  observer({
    data: {},
    props: {
      user
    },
    onLoad: function() {
      console.log(user)
      if (user.info) return
      wx.getUserInfo({
        success: res => {
          console.log('获取信息')
          user.updateInfo(res.userInfo)
        }
      })
    },
    handleLogin() {
      console.log('login')
      user.isLogin = true
    },

    goto: e => navTo(e)
  })
)
