import { apiGetOrderDetail, apiPayOrder } from '../../api/order'
import { observer, mapStore, setStore } from '../../store/tools'
import { navTo } from '../../utils/index'

const form = mapStore('ApplyForm')

Page(
  observer({
    props: { form },
    data: {
      orderDetail: null
    },

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
          orderNumber: this.data.orderDetail.orderNumber,
          payAmount: this.data.orderDetail.totalAmount,
          intoDay: this.data.orderDetail.intoDate,
          queitDay: this.data.orderDetail.queitDate,
          travelers
        }).then(res => {
          console.log('pay data', res)
          if (res.data.data.payOrder) {
            const {timeStamp,nonceStr,payPackage,signType,paySign}=res.data.data.payOrder
            // 开始调用支付接口
            wx.requestPayment({
              timeStamp:timeStamp+'',
              nonceStr,
              'package': payPackage,
              signType,
              paySign,
              success:res=>{
                console.log('支付成功')
                wx.switchTab({url: '/pages/order/order'})
              },
              fail: function(res) {}
            })
          }
        })
      } else {
        wx.showToast({
          title: '请先选择入住人信息。',
          icon: 'none'
        })
      }
    },

    // lifeCycle
    onLoad(opt) {
      apiGetOrderDetail(opt.id).then(res => {
        if (res.data.data.orderDetail) {
          const detail = res.data.data.orderDetail
          const intoDate = detail.intoDatetime.split(' ')[0]
          const queitDate = detail.queitDatetime.split(' ')[0]
          const days =
            (new Date(queitDate).getTime() - new Date(intoDate).getTime()) / (1000 * 60 * 60 * 24)
          this.setData({
            orderDetail: {
              ...detail,
              picture:`https://source.hilval.com/${detail.picture}`,
              intoDate,
              queitDate,
              days
            }
          })
          console.log(this.data.orderDetail)
        }
      })
    }
  })
)
