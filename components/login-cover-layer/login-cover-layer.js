import { observer, mapStore, setStore } from '../../store/tools'

const app = mapStore('App')
Component({
  properties: { isLogin: { type: Boolean } },

  methods: {
    getUserInfo(e) {
      if (e.detail.iv) {
        setStore(app, { isLogin: true })
      }
    }
  }
})
