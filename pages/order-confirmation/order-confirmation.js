import apiUser from '../../api/user'
Page({
  data: {
    houseId: null,
    customerName: '',
    customerPhone: '',
    customerEmail: ''
  },

  // update from
  handleChange(e) {
    const key = e.currentTarget.dataset.key
    const val = e.detail.value
    const newData = {}
    newData[`customer${key}`] = val
    this.setData(newData)
  },

  submit() {
    console.log(this.data)
    apiUser().then(res => {
      console.log('api response', res)
    })
  }
})
