import { observer, mapStore, setStore } from '../../store/tools'

const house = mapStore('House')
Page(
  observer({
    props: { house },
    data: {
      hotelId: '',
      toView: 'des',
      query: null,
      windowHeight: 0,
      showId: 'des',
      showTabs: false
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
      // wx.makePhoneCall({ phoneNumber: this.data.fetchData.phone })
    },

    submit() {
      // 先预定当前订单,后续确认
      mapStore('Order').createOrder()
      wx.navigateTo({
        url: '/pages/order-confirmation/order-confirmation'
      })
    },

    // lifecycle
    onLoad() {
      console.log('house id', house.currHouseId)
      house.getHouseDetail(house.currHouseId)
      setTimeout(() => {
        console.log(this.props.house.currHouseDetail)
      }, 1000)
      this.setData({
        query: wx.createSelectorQuery(),
        windowHeight: wx.getSystemInfoSync().windowHeight
      })
    }
  })
)
