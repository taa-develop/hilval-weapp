import { observer, mapStore, setStore } from '../../store/tools'

const select = mapStore('BusinessSelect')
Page(
  observer({
    data: {
      list: [
        { name: '默认排序', value: 'def' },
        { name: '价格由高到低', value: 'asc' },
        { name: '价格由低到高', value: 'desc' }
      ]
    },
    props: { select },
    handleClick(e) {
      const { obj } = e.currentTarget.dataset
      setStore(select, { sort: obj })
      wx.navigateBack()
    }
  })
)
