Page({
  data: {
    tempName: 'unpaid',
    tabs: [
      { name: '未支付订单', tempName: 'unpaid' },
      { name: '未出行订单', tempName: 'unstarted' },
      { name: '历史订单', tempName: 'history' }
    ]
  },

  tabClick(e) {
    const { temp } = e.currentTarget.dataset
    this.setData({ tempName: temp })
  }
})
