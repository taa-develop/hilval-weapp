import { observable, mapStore } from './tools'
import { apiLogin } from '../api/login'

class App {
  constructor() {
    observable(this, {
      isLogin: false,
      firstIn: true,
      token: {},
      recommendList: [] //首页打开时获取的推荐房屋列表,因为必须在获取到token之后才可以进行其他请求
    })
  }
  login() {
    apiLogin((tokenObj, infoObj) => {
      if (tokenObj) {
        this.token[tokenObj.tokenHeader] = `${tokenObj.tokenPrefix}${tokenObj.token}`
      }
      if (infoObj) {
        this.isLogin = true
        mapStore('User').signIn()
        mapStore('House')
          .getList()
          .then(list => {
            console.log('home page house list', list)
            this.recommendList = list
          })
      }
      return tokenObj
    })
  }
}
export default new App()
