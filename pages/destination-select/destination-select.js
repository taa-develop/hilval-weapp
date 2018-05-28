import { mapStore, setStore } from '../../store/tools'

Page({
  data: {
    desList: [
      {
        country: '中国',
        city: [{ label: '西安' }, { label: '昆山' }, { label: '港澳' }]
      },
      {
        country: '泰国',
        city: [
          { label: '曼谷' },
          { label: '清迈' },
          { label: '芭提雅' },
          { label: '华兴' },
          { label: '普吉岛' }
        ]
      },
      {
        country: '新加坡',
        city: [{ label: '新加坡市' }]
      },
      {
        country: '印度尼西亚',
        city: [{ label: '巴厘岛' }, { label: '美娜多' }]
      },
      {
        country: '马来西亚',
        city: [{ label: '吉隆坡' }, { label: '仙本那' }]
      }
    ]
  },

  handleClick(e) {
    const { label } = e.currentTarget.dataset
    setStore(mapStore('BusinessSelect'), { keyword: label })
    wx.navigateBack()
  }
})
