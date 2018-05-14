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
    },
    handleLogin() {
      console.log('login')
      user.isLogin = true
    },

    goto: e => navTo(e)
  })
)
