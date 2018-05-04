import { observer, mapStore } from '../../store/tools'

const select = mapStore('BusinessSelect')
Page(
  observer({
    data: {
      prices: [
        { name: '400以下', value: '400-', checked: false },
        { name: '400 - 600', value: '400-600', checked: false },
        { name: '600 - 800', value: '600-800', checked: false },
        { name: '800 - 1000', value: '800-1000', checked: false },
        { name: '1000以上', value: '1000+', checked: false }
      ],
      types: [
        { name: '酒店', value: 'jd', checked: false },
        { name: '公寓', value: 'gy', checked: false },
        { name: '客栈', value: 'kz', checked: false }
      ],
      characteristics: [
        { name: '海景房', value: 'hjf', checked: false },
        { name: '免押金', value: 'myj', checked: false },
        { name: '欧式精装修', value: 'osjzx', checked: false }
      ]
    },
    props: { select },
    handlePrice(e) {
      const { obj } = e.currentTarget.dataset
      select.set({ price: { name: obj.name, value: obj.value } })
      this.setData({
        prices: this.data.prices.map(v => ({ ...v, checked: v.value === obj.value }))
      })
    },
    handleClick(e) {
      const { key, obj } = e.currentTarget.dataset
      const isIn = select[key].filter(v => v.value === obj.value).length
      const newState = {}
      newState[key] = isIn
        ? select[key].filter(v => v.value !== obj.value)
        : [...select[key], { name: obj.name, value: obj.value }]
      select.set(newState)
      // update data
      const newData = {}
      newData[key] = this.data[key].map(v => ({
        ...v,
        checked: v.value === obj.value ? !v.checked : v.checked
      }))
      this.setData(newData)
    },
    // lifecycle
    onLoad() {
      this.setData({
        prices: this.data.prices.map(v => ({ ...v, checked: v.value === select.price.value })),
        types: this.data.types.map(v => ({
          ...v,
          checked: !!select.types.filter(o => o.value === v.value).length
        })),
        characteristics: this.data.characteristics.map(v => ({
          ...v,
          checked: !!select.characteristics.filter(o => o.value === v.value).length
        }))
      })
    }
  })
)
