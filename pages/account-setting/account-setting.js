import { observer, mapStore, setStore } from '../../store/tools'

const user = mapStore('User')

Page({
  data: {
    cardType: ['', '身份证', '护照'],

    identityType: 0,
    identityNumber: '',
    name: '',
    countryCode: '',
    mobile: ''
  },

  handleCardType(e) {
    this.setData({ identityType: e.detail.value })
  },

  handleChange(e) {
    const key = e.currentTarget.dataset.key
    const value = e.detail.value
    const newData = {}
    newData[key] = value
    this.setData(newData)
  },

  submit() {
    if (
      !(
        +this.data.identityType &&
        this.data.identityNumber &&
        this.data.name &&
        this.data.mobile &&
        this.data.countryCode
      )
    ) {
      wx.showToast({
        title: '请先完成表单!',
        icon: 'none'
      })
    } else {
      const { identityType, identityNumber, name, countryCode, mobile } = this.data
      console.log('info', this.data)
      user
        .improveUserInfo({ identityType, identityNumber, name, countryCode, mobile })
        .then(() => {
          wx.showToast({ title: '更新成功' })
          wx.navigateBack()
        })
        .catch(err => {
          wx.showToast({ title: err, icon: 'none' })
        })
    }
  },

  // lifeCycle
  onShow() {
    // 先获取用户原始信息
    user.getUserDetail().then(res => {
      this.setData({
        identityType: +res.identityType,
        identityNumber: res.identityNumber,
        name: res.name,
        countryCode: res.countryCode,
        mobile: res.mobile
      })
    })
  }
})
