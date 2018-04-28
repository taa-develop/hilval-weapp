import { observer, mapStore } from '../../store/tools'
const form = mapStore('ApplyForm')
Page(
  observer({
    data: {
      startTime: 0,
      endTime: 0,
      monthList: [],
      timeSlot: [],
      selectStatus: 0
    },
    props: { form },
    init() {
      const now = new Date()
      const currY = now.getFullYear()
      const currM = now.getMonth()
      const currD = now.getDate()
      console.log(form)
      this.setData({
        startTime: new Date(currY, currM, currD).getTime(),
        endTime: new Date(currY, currM, currD + 90).getTime()
      })
      const len = () => {
        const y1 = new Date(this.data.startTime).getFullYear()
        const y2 = new Date(this.data.endTime).getFullYear()
        const m1 = new Date(this.data.startTime).getMonth()
        const m2 = new Date(this.data.endTime).getMonth()
        return y2 > y1 ? m2 - m1 + 13 : m2 - m1 + 1
      }
      let arr = []
      for (let i = 0; i < len(); i++) {
        arr.push({ year: currY, month: currM + i })
      }
      this.setData({
        monthList: arr
      })
    },
    handleClickDate(e) {
      const timestamp = e.detail.val.timestamp
      this.setData({ selectStatus: (this.data.selectStatus + 1) % 2 })
      if (this.data.selectStatus === 0) {
        if (form.checkIn < timestamp) {
          form.update({ checkOut: timestamp })
        } else {
          const ci = form.checkIn
          form.update({ checkIn: timestamp, checkOut: ci })
        }
        wx.navigateBack()
      } else {
        form.update({ checkIn: timestamp, checkOut: 0 })
      }
    },
    supplement() {
      // 当只选了'check in',自动默认选择次日为'check out'
      if (!form.checkOut) {
        form.update({
          checkOut: new Date(form.checkIn + 24 * 60 * 60 * 1000).getTime()
        })
      }
    },
    onLoad() {
      this.init()
    },
    onShow() {
      this.setData({ selectStatus: 0 })
    },
    onUnload() {
      this.supplement()
    },
    OnHide() {
      this.supplement()
    }
  })
)
