Page({
  data: {
    showList: false,
    list: [
      { name: '国家酒店', add: '珠海 香洲区', type: 0, price: '2344' },
      { name: '非哦哦', add: '珠海 香洲区', type: 1, price: '5555' },
      { name: '身份', add: '珠海 香洲区', type: 1, price: '73' },
      { name: '分违反法规', add: '珠海 香洲区', type: 2, price: '455' },
      { name: '咯额分', add: '珠海 香洲区', type: 0, price: '64' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' },
      { name: '擦擦分我问', add: '珠海 香洲区', type: 1, price: '34' }
    ],
    history: [
      { text: '广州', url: '/pages/home/home' },
      { text: '单房', url: '/pages/home/home' },
      { text: '套房', url: '/pages/home/home' },
      { text: '近地铁', url: '/pages/home/home' },
      { text: '市中心', url: '/pages/home/home' },
      { text: '小旅馆', url: '/pages/home/home' }
    ],
    recommend: [
      { text: '温馨小家', url: '' },
      { text: '景区旅馆', url: '' },
      { text: '三亚', url: '' },
      { text: '马尔代夫', url: '' }
    ]
  },
  goto(e) {
    console.log(e.currentTarget.dataset.url)
  },
  onInput(e) {
    const val = e.detail.value
    if (val !== this.data.showList) {
      this.setData({ showList: !!val })
    }
  },
  onLoad() {
    console.log('load')
  }
})
