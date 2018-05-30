import { observer, mapStore, setStore } from '../../store/tools'
import { dateFormat } from '../../utils/index'

const app = mapStore('App')
const form = mapStore('ApplyForm')
const select = mapStore('BusinessSelect')

Page(
  observer({
    props: { app, form, select },
    data: {
      // date range
      start: '',
      end: '',
      peopleOptions: [
        { label: '不限人数', value: 0 },
        { label: '1人', value: 1 },
        { label: '2人', value: 2 },
        { label: '3人', value: 3 },
        { label: '4人', value: 4 },
        { label: '5人', value: 5 },
        { label: '6人', value: 6 },
        { label: '7人', value: 7 }
      ],
      banner: [
        { id:'banner-1',url: '../../resource/images/banner1.jpg' },
        { id:'banner-2',url: '../../resource/images/banner2.jpg' },
        { id:'banner-3',url: '../../resource/images/banner3.jpg' },
        { id:'banner-4',url: '../../resource/images/banner4.jpg' },
        { id:'banner-5',url: '../../resource/images/banner5.jpg' }
      ]
    },

    handleInputClick(e) {
      // 跳转到目的地选择页面
      wx.navigateTo({ url: '/pages/destination-select/destination-select' })
    },

    handleUpdateKeyword(e) {
      console.log(e)
      const keyword = e.detail.value
      setStore(select, { keyword })
    },

    handleLocation() {
      wx.chooseLocation({
        success: res => {
          setStore(select, { keyword: res.name })
        }
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
    },

    onShareAppMessage(res) {
      return {
        title: '晓行出行',
        path: '/pages/home-page/home-page'
      }
    }
  })
)
