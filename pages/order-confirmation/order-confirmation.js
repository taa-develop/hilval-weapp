import { navTo } from '../../utils/index'
import { observer, mapStore, setStore } from '../../store/tools'
import { apiPayOrder } from '../../api/order'

const house = mapStore('House')
const form = mapStore('ApplyForm')
const order = mapStore('Order')

Page(
  observer({
    props: { house, form, order },

    goto: e => navTo(e),

    handleRemove(e) {
      const id = e.currentTarget.dataset.id
      setStore(form, { travelers: form.travelers.filter(v => v.id !== id) })
    },

    submit() {
      console.log('pay order')
      // 检查出行人
      const travelers = form.travelers.map(obj => obj.id)
      if (!!travelers.length) {
        apiPayOrder({
          orderNumber: order.currPayingOrder.orderNumber,
          payAmount: order.currPayingOrder.totalAmount,
          intoDay: form.startDateText,
          queitDay: form.endDateText,
          travelers
        }).then(res => {
          console.log('on pay order', res)
          if (res.data.data.payOrder) {
            const { timeStamp, nonceStr, payPackage, signType, paySign } = res.data.data.payOrder
            // 开始调用支付接口
            wx.requestPayment({
              timeStamp: timeStamp + '',
              nonceStr,
              package: payPackage,
              signType,
              paySign,
              success: res => {
                console.log('支付成功')
                wx.switchTab({ url: '/pages/order/order' })
              },
              fail: function(res) {}
            })
          }
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '请先选择入住人信息。',
          showCancel: false
        })
      }
    }
  })
)
