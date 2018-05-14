import { navTo } from '../../utils/index'

Page({
  data: {
    tenants: [
      { id: '12', name: '张三', checked: false },
      { id: '23', name: '李四', checked: false }
    ]
  },

  handleClick(e) {
    const { id } = e.currentTarget.dataset
    console.log(id)
    this.setData({
      tenants: this.data.tenants.map(obj => ({
        ...obj,
        checked: obj.id === id ? !obj.checked : obj.checked
      }))
    })
  },

  backToOrder() {
    console.log(this.data.tenants)
    wx.navigateBack()
  }
})
