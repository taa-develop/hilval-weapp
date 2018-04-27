Page({
  data: {
    isShow: false,
    list: [
      { name: '国家酒店', add: '珠海 香洲区', type: 0, price: '2344' },
      { name: '非哦哦', add: '珠海 香洲区', type: 1, price: '5555' },
      { name: '身份', add: '珠海 香洲区', type: 1, price: '73' },
      { name: '分违反法规', add: '珠海 香洲区', type: 2, price: '455' },
      { name: '咯额分', add: '珠海 香洲区', type: 0, price: '64' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' }
    ]
  },
  onInput(e) {
    const val = e.detail.value
    if (val !== this.data.isShow) {
      this.setData({ isShow: !!val })
    }
  },
  onLoad() {
    console.log('load')
  }
})
