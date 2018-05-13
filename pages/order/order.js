Page({
  data: {
    tempName: 'unpaid',
    usingData: [],
    tabs: [
      { name: '未支付订单', tempName: 'unpaid' },
      { name: '未出行订单', tempName: 'unstarted' },
      { name: '历史订单', tempName: 'history' }
    ],

    unpaidList: [],
    unstartedList: [],
    historyList: [
      {
        id: '',
        name: '国际大酒店',
        info: '豪华大房',
        logo: '',
        checkStatus: '已审核',
        checkInDate: '5月30号',
        checkOutDate: '6月5号',
        price: '1338'
      }
    ]
  },

  tabClick(e) {
    const { temp } = e.currentTarget.dataset
    this.setData({ usingData: this.data[`${temp}List`] })
  }
})
