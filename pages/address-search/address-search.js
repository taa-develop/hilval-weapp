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
      { text: '草李赖赖', url: '/pages/home/home' },
      { text: '丢你螺母', url: '/pages/home/home' },
      { text: '撒币', url: '/pages/home/home' },
      { text: '塞塞', url: '/pages/home/home' },
      { text: '嘞锅貂茅', url: '/pages/home/home' },
      { text: '咙撒哉', url: '/pages/home/home' },
      { text: '窝丁雷锅肥,塞泼钙', url: '/pages/home/home' }
    ],
    recommend: [
      { text: '杭州羊肉串小卖部', url: '' },
      { text: '青岛雷锋塔', url: '' },
      { text: '青藏高原高速公路钱留下休息站', url: '' },
      { text: '我家', url: '' }
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
