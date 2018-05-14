import store from './store/index'

App({
  onLaunch: function() {
    store.App.login()
  },
  store
})
