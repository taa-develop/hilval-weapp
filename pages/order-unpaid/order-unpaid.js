import { navTo } from '../../utils/index'
import { observer, mapStore } from '../../store/tools'

const order = mapStore('Order')

Page(
  observer({
    props: { order },

    handleTab: e => navTo(e),

    handleRefresh() {
      console.log('refresh')
      order.getOrders(1)
    },

    handleMore() {
      console.log('load more')
      order.getMoreOrder(1)
    },

    // lifeCycle
    onLoad() {
      order.getOrders(1)
    }
  })
)
