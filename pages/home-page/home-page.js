import { observer, mapStore, setStore } from '../../store/tools'
import { dateFormat } from '../../utils/index'

const app = mapStore('App')
const form = mapStore('ApplyForm')
const select = mapStore('BusinessSelect')
const house = mapStore('House')

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
        {
          id: 'banner-1',
          textZH: '香港',
          textEN: 'hongkong',
          url:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528109865805&di=ac9fe919aaa15b12803ef2efc3e6320b&imgtype=0&src=http%3A%2F%2Fimg06.tooopen.com%2Fimages%2F20161031%2Ftooopen_sy_184257814572.jpg'
        },
        {
          id: 'banner-2',
          textZH: '普吉岛',
          textEN: 'phuket',
          url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3275782613,1124369566&fm=27&gp=0.jpg'
        },
        {
          id: 'banner-3',
          textZH: '三亚',
          textEN: 'sanya',
          url:
            'http://staticfile.tujia.com/upload/TravelArticleContent/day_160108/201601080053174172.jpg'
        }
      ],
      recommendList: [],
      strategy: [
        {
          id: 'strategy-1',
          textZH: '巴厘岛',
          textEN: 'Bali',
          url:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1540367103,3998607624&fm=27&gp=0.jpg'
        },
        {
          id: 'strategy-2',
          textZH: '杭州',
          textEN: 'HangZhou',
          url:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=140836095,3593537244&fm=27&gp=0.jpg'
        },
        {
          id: 'strategy-3',
          textZH: '南京',
          textEN: 'NanJing',
          url:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=357671502,975226938&fm=27&gp=0.jpg'
        }
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
      console.log(new Date(form.endDateText).getTime() - new Date(form.startDateText).getTime() > 0)
      if (new Date(form.endDateText).getTime() - new Date(form.startDateText).getTime() > 0) {
        wx.navigateTo({
          url: '/pages/business/business'
        })
      } else {
        wx.showModal({ title: '错误', content: '入住日期不能大于退房日期!', showCancel: false })
      }
    },

    goto(e) {
      // 点击推荐民俗后跳转到民宿详情
      const { id } = e.currentTarget.dataset
      const type = 'homestay'
      wx.navigateTo({ url: `/pages/${type}-detail/${type}-detail?id=${id}` })
    },

    // lifecycle
    onLoad() {},

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
