import { observer, mapStore, setStore } from '../../store/tools'
import { dateFormat } from '../../utils/index'

const form = mapStore('ApplyForm')

Page(
  observer({
    props: { form },
    data: {
      // date range
      start: '',
      end: '',
      peopleOptions: [
        { label: '1人', value: 1 },
        { label: '2人', value: 2 },
        { label: '3人', value: 3 },
        { label: '4人', value: 4 },
        { label: '5人', value: 5 },
        { label: '6人', value: 6 },
        { label: '7人', value: 7 },
        { label: '不限人数', value: 0 }
      ]
    },

    handleLocation() {
      wx.chooseLocation({
        success: res => console.log(res)
      })
    },

    handleDate(e) {
      const value = e.detail.value
      const type = e.currentTarget.dataset.datetype
      // date string -> timestamp
      const dateStr = value.split('-')
      const y = +dateStr[0]
      const m = dateStr[1] - 1
      const d = +dateStr[2]
      const timestamp = new Date(y, m, d).getTime()
      const newSate = {}
      newSate[`${type}Date`] = timestamp
      setStore(form, newSate)
    },

    handlePeople(e) {
      setStore(form, { peopleIndex: e.detail.value })
    },

    handleSubmit() {
      // console.log(form)
      wx.navigateTo({
        url: '/pages/business/business'
      })
    },

    // lifecycle
    onShow() {
      const today = new Date()
      const future = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90)
      this.setData({
        start: dateFormat(today),
        end: dateFormat(future)
      })
    }
  })
)
