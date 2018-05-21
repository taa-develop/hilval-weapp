import { navTo } from '../../utils/index'
import { observer, mapStore, setStore } from '../../store/tools'

const house = mapStore('House')
const form = mapStore('ApplyForm')
const order = mapStore('Order')

Page(
  observer({
    props: { house, form },

    goto: e => navTo(e),

    handleRemove(e) {
      const id = e.currentTarget.dataset.id
      setStore(form, { travelers: form.travelers.filter(v => v.id !== id) })
    },

    submit() {
      console.log('pay order')
      order.payOrder()
    }
  })
)
