import { observer, mapStore, setStore } from '../../store/tools'

Component({
  properties: { isLogin: { type: Boolean }, firstIn: { type: Boolean } },

  methods: {
    getUserInfo(e) {
      setStore(mapStore('App'), { firstIn: false })
      if (e.detail.iv) {
        mapStore('User').signIn()
      }
    }
  }
})
