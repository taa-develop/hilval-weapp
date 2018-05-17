import { navTo } from '../../utils/index'
import { mapStore, setStore } from '../../store/tools'

const user = mapStore('User')
const form = mapStore('ApplyForm')

Page({
  data: {
    tenants: []
  },

  handleClick(e) {
    const { id } = e.currentTarget.dataset
    this.setData({
      tenants: this.data.tenants.map(obj => ({
        ...obj,
        checked: obj.id === id ? !obj.checked : obj.checked
      }))
    })
    // 选择后,更新到store
    setStore(form, { travelers: this.data.tenants.filter(v => v.checked) })
  },

  backToOrder() {
    console.log(this.data.tenants)
    wx.navigateBack()
  },

  goto: e => navTo(e),

  // lifecycle
  onShow() {
    // 初始创建选项列表
    user.getTraveler().then(res => {
      this.setData({
        tenants: res.map(obj => ({
          ...obj,
          checked: !!form.travelers.filter(v => v.id === obj.id).length
        }))
      })
      console.log('check travelers', this.data.tenants)
    })
  }
})
