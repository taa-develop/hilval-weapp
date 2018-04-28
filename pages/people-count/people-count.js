import { observer, mapStore } from '../../store/tools'
const f = mapStore('ApplyForm')
Page(
  observer({
    data: {
      list: [
        { text: '1人', val: 1 },
        { text: '2人', val: 2 },
        { text: '3人', val: 3 },
        { text: '4人', val: 4 },
        { text: '5人', val: 5 },
        { text: '6人', val: 6 },
        { text: '7人', val: 7 },
        { text: '8人', val: 8 },
        { text: '9人', val: 9 },
        { text: '10人', val: 10 },
        { text: '不限人数', val: 0 }
      ]
    },
    props: { f },
    onClick(e) {
      console.log(e.currentTarget.dataset.val)
      f.update({ people: e.currentTarget.dataset.val })
      wx.navigateBack()
    }
  })
)
