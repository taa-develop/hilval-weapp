import { observer, mapStore } from '../../store/tools'

const app = mapStore('App')
const order = mapStore('Order')

Page(
  observer({
    props: { app, order },
    data: {
      tabs: [
        { label: '未支付订单', name: 'Unpaid', type: 1 },
        { label: '未出行订单', name: 'Unstarted', type: 2 },
        { label: '历史订单', name: 'History', type: 3 }
      ],
      tabIndex: 0
    },

    handleTab(e) {
      if (!app.isLogin) {
        wx.showToast({ title: '请先登陆！', icon: 'none' })
        return
      }

      const tabIndex = e.currentTarget.dataset.index
      this.setData({ tabIndex })
      order.getOrders(tabIndex + 1)
    },

    handleRefresh() {
      order.getOrders(this.data.tabs[this.data.tabIndex].type)
    },

    handleLoadMore() {
      order.getMoreOrders(this.data.tabs[this.data.tabIndex].type)
    },

    handlePayNow(e) {
      // 这里是在订单列表里面申请的支付
      const orderId = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/order-detail/order-detail?id=${orderId}&type=unpaid`
      })
    },

    // lifeCycle
    onShow() {
      console.log('order page show')
      if (!app.isLogin) {
        wx.showToast({ title: '请先登陆！', icon: 'none' })
        return
      }
      order.getOrders(1)
      order.getOrders(2)
      order.getOrders(3)
    }
  })
)
