import { observer, mapStore, setStore } from '../../store/tools'

const select = mapStore('BusinessSelect')
const house = mapStore('House')
Page(
  observer({
    data: {
      prices: [
        { id: 'p-0', label: '不限', min: 0, max: 0 },
        { id: 'p-1', label: '400以下', min: 0, max: 400 },
        { id: 'p-2', label: '400-600', min: 400, max: 600 },
        { id: 'p-3', label: '600-800', min: 600, max: 800 },
        { id: 'p-4', label: '800-1000', min: 800, max: 1000 },
        { id: 'p-5', label: '1000以上', min: 1000, max: 0 }
      ],
      types: []
      // characteristics: [
      //   { name: '海景房', value: 'hjf', checked: false },
      //   { name: '免押金', value: 'myj', checked: false },
      //   { name: '欧式精装修', value: 'osjzx', checked: false }
      // ]
    },
    props: { select },
    handlePrice(e) {
      const { obj } = e.currentTarget.dataset
      this.setData({
        prices: this.data.prices.map(v => ({ ...v, checked: v.id === obj.id }))
      })
      delete obj.checked
      setStore(select, { price: { ...obj } })
    },
    handleClick(e) {
      const item = e.currentTarget.dataset.obj
      this.setData({
        types: this.data.types.map(obj => ({
          ...obj,
          checked: obj.id === item.id ? !obj.checked : obj.checked
        }))
      })
      setStore(select, { types: this.data.types.filter(obj => obj.checked) })
    },
    // lifecycle
    onShow() {
      // 初始设置types的状态

      this.setData({
        prices: this.data.prices.map(obj => ({ ...obj, checked: select.price.id === obj.id })),
        types: house.houseTypes.map(obj => ({
          ...obj,
          checked: !!select.types.filter(v => v.id === obj.id).length
        }))
      })
    }
  })
)
