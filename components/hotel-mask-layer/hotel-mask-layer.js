Component({
  properties: {
    data: {
      type: Object,
      value: {
        id: 'house-id',
        name: '索拉卡国家大酒店',
        imgs: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525325869193&di=43a88325b0292d33f2c84cbc635e931f&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2015%2F3%2F2%2F201503021709055d8ca.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525920606&di=5a38b17c7f27f8f12e9922764344ab5f&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.ctrip.com%2Fi%2Fhotel%2F26000%2F25490%2FE9B26D3A-20B4-4164-A81A-248A9DC55931.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1525315826&di=f82e1dbf3bb53d792aeec376ba991215&src=http://img1.cache.netease.com/catchpic/F/F7/F76CFA7C445B660575B83D006783567F.jpg'
        ],
        info: '房屋 55平;含双人早餐;双人床 1.8*1.5;单人床 1.5*1.5;宜住2-4人;加床 ￥150/人',
        price: 1288
      }
    },
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {
    infos: []
  },
  methods: {
    hide() {
      this.triggerEvent('hide-hotel-mask')
    },
    submit() {},
    stopScroll() {
      return null
    }
  },
  ready() {
    this.setData({ infos: this.properties.data.info.split(';') })
  }
})
