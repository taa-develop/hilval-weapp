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
    onLoad: function() {
      user.signIn()
    },
    handleLogin() {},

    goto: e => navTo(e)
  })
)
