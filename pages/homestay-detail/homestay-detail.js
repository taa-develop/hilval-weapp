import { observer, mapStore, setStore } from '../../store/tools'

const house = mapStore('House')
const app = mapStore('App')

Page(
  observer({
    props: { house },
    data: {
      houseId: null,

      toView: 'des',
      query: null,
      windowHeight: 0,
      showId: 'des',
      showTabs: false,

      // map
      lon: 0,
      lat: 0,
      markers: null
    },

    handleSwiper(e) {
      console.log(e.detail)
    },

    jump(e) {
      // 跳到指定的锚点
      const a = e.currentTarget.dataset.anchor
      this.setData({ toView: a })
    },

    handleScroll(e) {
      // show fixed bar
      const showTabs = e.detail.scrollTop > 0.5 * this.data.windowHeight
      this.data.showTabs !== showTabs && this.setData({ showTabs })
      this.data.query
        .selectAll('#des,#map,#info')
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

    openMap(e) {
      const { lon, lat } = e.currentTarget.dataset
      console.log(lon, lat)
      wx.openLocation({
        latitude: +lat,
        longitude: +lon
      })
    },

    phoneCall(e) {
      wx.makePhoneCall({ phoneNumber: e.currentTarget.dataset.phone })
    },

    submit() {
      // 判断是否登陆
      // 先预定当前订单,后续确认
      const { name, mobile, identityNumber } = mapStore('User').userDetail
      if (name && mobile && identityNumber) {
        mapStore('Order')
          .createOrder()
          .then(() => {
            wx.navigateTo({
              url: '/pages/order-confirmation/order-confirmation'
            })
          })
          .catch(msg => {
            wx.shoModal({
              title: '错误',
              content: msg,
              showCancel: false
            })
          })
      } else {
        wx.showModal({ title: '提示', content: '请先完善用户信息', showCancel: false })
        const t = setTimeout(() => {
          clearTimeout(t)
          wx.navigateTo({
            url: '/pages/account-setting/account-setting'
          })
        }, 3000)
      }
    },

    // lifecycle
    onLoad(opt) {
      this.setData({ houseId: opt.id })
      house.getHouseDetail(this.data.houseId).then(res => {
        // 拿到数据后，需要设置map对象
        this.setData({
          lon: res.lon,
          lat: res.lat,
          markers: [
            {
              iconPath: '../../resource/icons/loc-fill.png',
              id: 0,
              latitude: res.lat,
              longitude: res.lon,
              width: 30,
              height: 30
            }
          ]
        })
      })
    },

    onShow() {
      console.log('on show ', this.data.houseId)
    }
  })
)
