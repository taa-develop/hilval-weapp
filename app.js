import store from './store/index'
import gql from './utils/nanographql'

App({
  onLaunch: function() {
    wx.login({
      success: res => {
        console.log('登陆成功', res)
        wx.getSetting({ success: res => console.log('获取授权') })
        const query = gql`
          query($name: String!) {
            hello(name: $name) {
              msg
            }
          }
        `
        const v = {
          name: 'kk'
        }
        console.log(query(v))
        wx.request({
          url: 'http://219.131.240.116:3002/hilval-web/graphql',
          data: query(v),
          method: 'POST'
        })
      }
    })
  },
  store
})
