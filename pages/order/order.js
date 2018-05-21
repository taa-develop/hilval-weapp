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
      this.setData({ tabIndex: e.currentTarget.dataset.index })
    },

    handleRefresh() {
      order.getOrders(this.data.tabs[this.data.tabIndex].type)
    },

    handleLoadMore() {
      order.getMoreOrders(this.data.tabs[this.data.tabIndex].type)
    },

    handlePayNow(e) {
      const orderId = e.currentTarget.dataset.id
      order.setPayingOrder(orderId)
    },

    // lifeCycle
    onLoad() {
      order.getOrders(1)
      order.getOrders(2)
      order.getOrders(3)
    }
  })
)
