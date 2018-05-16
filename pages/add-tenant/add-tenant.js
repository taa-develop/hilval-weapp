import { apiAddUserTraveler } from '../../api/user-info'

Page({
  data: {
    cardType: ['', '身份证', '护照'],

    identityType: 0,
    identityNumber: '',
    name: '',
    countryCode: '',
    mobile: '',
    email: ''
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
    console.log(this.data)
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
      const { identityType, identityNumber, name, countryCode, mobile, email } = this.data
      apiAddUserTraveler({ identityType, identityNumber, name, countryCode, mobile, email })
      wx.navigateBack()
    }
  }
})
