const observable = require('../utils/mobx').extendObservable
const observer = require('../utils/observer').observer
const mapStore = name => getApp().store[name]
export { observable, observer, mapStore }
