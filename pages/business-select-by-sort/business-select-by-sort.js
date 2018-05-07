import { observer, mapStore } from '../../store/tools'

const select = mapStore('BusinessSelect')
Page(
  observer({
    data: {
      list: [
        { name: '综合排序', value: 'zhpx' },
        { name: '价格由高到低', value: 'g-d' },
        { name: '价格由低到高', value: 'd-g' }
      ]
    },
    props: { select },
    handleClick(e) {
      const { obj } = e.currentTarget.dataset
      select.set({ sort: obj })
      wx.navigateBack()
    }
  })
)
