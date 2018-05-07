import store from './store/index'

App({
  onLaunch: function() {
    store.User.login()
  },
  store
})
