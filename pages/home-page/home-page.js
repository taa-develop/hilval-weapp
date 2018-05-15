Page({
  data: {
    start: '2018-05-01',
    end: '2018-06-01',
    startDate: '',
    endDate: '',
    peopleOptions: [{ label: '1人', value: 1 }, { label: '2人', value: 2 }],
    peopleIndex: 0
  },

  handleLocation() {
    wx.chooseLocation({
      success: res => console.log(res)
    })
  },

  handleDate(e) {
    console.log(e)
    const value = e.detail.value
    const type = e.currentTarget.dataset.datetype
    const newSate = {}
    newSate[`${type}Date`] = value

    this.setData(newSate)
  },

  handlePeople(e) {
    this.setData({ peopleIndex: e.detail.value })
  }
})
