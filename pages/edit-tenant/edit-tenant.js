import { apiGetTravelerDetail, apiEditTraveler, apiDeleteTraveler } from '../../api/user-info'
import { mapStore } from '../../store/tools'

const user = mapStore('User')

Page({
  data: {
    cardType: ['', '身份证', '护照'],

    id: '',
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

  handleSubmit() {
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
      const { id, identityType, identityNumber, name, countryCode, mobile, email } = this.data
      // apiEditTraveler({ id, identityType, identityNumber, name, countryCode, mobile, email })
      user
        .updateTraveler({ id, identityType, identityNumber, name, countryCode, mobile, email })
        .then(() => {
          wx.navigateBack()
        })
        .catch(err => wx.showToast({ title: `错误:${err}`, icon: 'none' }))
    }
  },

  // handleDelete() {
  //   wx.showModal({
  //     title: '提示',
  //     content: '是否确定删除该记录?',
  //     success: res => {
  //       if (res.confirm) {
  //         apiDeleteTraveler(this.data.id)
  //         wx.navigateBack()
  //       }
  //     }
  //   })
  // },

  // lifeCycle
  onLoad(opt) {
    apiGetTravelerDetail(opt.id).then(res => {
      const {
        id,
        identityType,
        identityNumber,
        name,
        countryCode,
        mobile,
        email
      } = res.data.data.userTravelerInfo
      this.setData({
        id,
        identityType,
        identityNumber,
        name,
        countryCode,
        mobile,
        email
      })
    })
  }
})
