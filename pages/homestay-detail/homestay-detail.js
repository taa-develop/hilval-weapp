Page({
  data: {
    hotelId: '',
    toView: 'des',
    fetchData: {
      id: 'hotel023',
      img:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525239257680&di=a30d97d1568f14a4ba26f1c4697dd226&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F31%2F83%2F78M58PICrXD_1024.jpg',
      name: '宏图国际大酒店',
      tags: ['豪华', '五星级', '总统套房', '精装修'],
      shotDes: '120m^2 两室两卫一厅 宜住2-4人',
      description:
        '英国洲际酒店集团是一家拥有九大著名品牌的全球酒店管理公司。洲际酒店集团在全世界100多个国家和地区拥有、管理、出租或托管4,600多家酒店，超过674,000间客房。集团旗下品牌包括：洲际酒店及度假村、皇冠酒店及度假村、英迪格酒店、假日酒店及度假村、智选假日酒店、Staybridge Suites 和 Candlewood Suites 以及近期全新推出的全球首个为华人度身定制的高端国际品牌-华邑酒店及度假村和专注于美国市场的健康生活时尚品牌-EVEN酒店. ',
      facilities: [true, true, false, true, false, true, true, true],
      address: ['', ''],
      comment: [
        {
          id: 'user00003',
          name: '王大拿',
          avatar: 'http://img.jituwang.com/uploads/allimg/130722/260057-130H211291418.jpg',
          date: '2018-03-04',
          content: '环境好,服务很贴心,很满意.'
        },
        {
          id: 'user00739847',
          name: '王大拿',
          avatar: 'http://img.jituwang.com/uploads/allimg/130722/260057-130H211291418.jpg',
          date: '2018-03-04',
          content: '环境好,服务很贴心,很满意.'
        }
      ],
      info: { checkIn: '12:00', checkOut: '14:00', receive: '00:00 - 24:00', deposit: 300 },
      phone: '18826271780',
      price: 699
    },
    fetchMore: [
      {
        img:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525264326590&di=c2e0f144baf63ed6a416ad56c3b35aa2&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Ft1%2Ftuangou%2F291%2F426%2F282%2F4be220d117cf496f93365962e06cfa9c_720_480.jpg',
        name: '繁星大酒店'
      },
      {
        img:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525264367863&di=a844ae63f323bbd55e7f77481c407c4e&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F06%2F21%2F01g58PICR9J_1024.jpg',
        name: '弗尔登大酒店'
      }
    ],
    facilities: [
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      },
      {
        icon: '../../resource/icons/home.png',
        iconActive: '../../resource/icons/home-active.png',
        name: '洗衣机',
        have: false
      }
    ],
    query: null,
    windowHeight: 0,
    showId: 'des',
    showTabs: false
  },
  onLoad(option) {
    this.setData({
      hotelId: option.id,
      query: wx.createSelectorQuery(),
      windowHeight: wx.getSystemInfoSync().windowHeight,
      facilities: this.data.facilities.map((v, i) => ({
        ...v,
        have: this.data.fetchData.facilities[i]
      }))
    })
  },
  jump(e) {
    const a = e.currentTarget.dataset.anchor
    this.setData({ toView: a })
  },
  handleScroll(e) {
    // show fixed bar
    const showTabs = e.detail.scrollTop > 0.5 * this.data.windowHeight
    this.data.showTabs !== showTabs && this.setData({ showTabs })
    this.data.query
      .selectAll('#des,#comment,#info')
      .boundingClientRect(function(rects) {})
      .exec(response => {
        const data = response.pop()
        let id = ''
        data.forEach(v => {
          if (v.top < this.data.windowHeight) {
            id = v.id
          }
        })
        this.data.showId !== id && this.setData({ showId: id })
      })
  },
  handleCheck(e) {
    console.log(e.currentTarget.dataset.val)
    const val = e.currentTarget.dataset.val
    this.setData({
      filters: this.data.filters.map(v => ({
        ...v,
        checked: v.val === val ? !v.checked : v.checked
      }))
    })
  },
  gotomap() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  phoneCall() {
    wx.makePhoneCall({ phoneNumber: this.data.fetchData.phone })
  }
})
