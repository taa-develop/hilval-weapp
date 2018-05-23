import { observer, mapStore, setStore } from '../../store/tools'

Component({
  properties: { firstIn: { type: Boolean } },

  methods: {
    getUserInfo(e) {
      setStore(mapStore('App'), { firstIn: false })
      if (e.detail.iv) {
        mapStore('User').signIn()
      }
    }
  }
})
