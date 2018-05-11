const observable = require('../utils/mobx').extendObservable
const observer = require('../utils/observer').observer

// 用于筛选store子模块
const mapStore = name => getApp().store[name]
// 用于更新模块的属性
const setStore = (store, options) => {
  Object.keys(options).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(store, key)) {
      store[key] = options[key]
    }
  })
}
export { observable, observer, mapStore, setStore }
