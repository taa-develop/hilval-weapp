import { observer, mapStore, setStore } from '../../store/tools'

Component({
  properties: { isLogin: { type: Boolean } },

  methods: {
    getUserInfo(e) {
      if (e.detail.iv) {
        setStore(mapStore('App'), { isLogin: true })
        mapStore('User').signIn()
      }
    }
  }
})
