import { observer, mapStore } from '../../store/tools'

const form = mapStore('ApplyForm')
Page(
  observer({
    data: {
      location: '珠海',
      checkInDate: '',
      checkOutDate: '04-27 12:00',
      peopleIndex: 0,
      peopleCount: ['1', '2', '3', '不限'],
      hot: [{ img: '' }, { img: '' }, { img: '' }, { img: '' }, { img: '' }],
      strategy: [
        { img: '' },
        { img: '' },
        { img: '' },
        { img: '' },
        { img: '' }
      ]
    },
    props: {
      form
    },
    onLoad: function() {},
    getLocation() {
      wx.chooseLocation({
        success: res => {
          console.log('location ===>', res)
          this.props.form.update({ location: { ...res } })
          console.log(this.props.form)
        }
      })
    },
    dateChange(e) {
      this.setData({ checkInDate: e.detail.value })
    },
    peopleChange(e) {
      console.log(e.detail.value)
      this.setData({ peopleIndex: e.detail.value })
    },
    to(e) {
      wx.navigateTo({ url: e.currentTarget.dataset.url })
    }
  })
)
