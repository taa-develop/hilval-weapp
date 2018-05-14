import { navTo } from '../../utils/index'

Page({
  data: {},

  goto: e => navTo(e),

  submit() {
    console.log(this.data)
  }
})
