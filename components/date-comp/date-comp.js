Component({
  // props form parent component
  properties: {
    year: { type: Number, value: 0 },
    month: { type: Number, value: 0 },
    start: { type: Number, value: 0 },
    end: { type: Number, value: 0 },
    checkIn: { type: Number },
    checkOut: { type: Number }
  },
  // self attr
  data: {
    week: ['日', '一', '二', '三', '四', '五', '六'],
    dates: [],
    currYear: 0,
    currMonth: 0
  },
  methods: {
    init() {
      const currY = this.properties.year
      const currM = this.properties.month
      const currMonthLength = new Date(currY, currM + 1, 0).getDate()
      const firstDay = new Date(currY, currM, 1).getDay()
      let arr = []
      for (let i = 0; i < firstDay; i++) {
        arr.push({
          timestamp: 0,
          show: false,
          text: '0',
          isWeek: false,
          disable: true
        })
      }
      for (let i = 0; i < currMonthLength; i++) {
        const date = new Date(currY, currM, i + 1)
        arr.push({
          timestamp: date.getTime(),
          show: true,
          text: i + 1,
          isWeek: date.getDay() === 0 || date.getDay() === 6,
          disable: date.getTime() < this.properties.start || date.getTime() > this.properties.end
        })
      }
      const timestamp = new Date(currY, currM, 1)
      this.setData({
        dates: arr,
        currYear: timestamp.getFullYear(),
        currMonth: timestamp.getMonth()
      })
    },
    onClick(e) {
      const val = e.currentTarget.dataset.val
      if (!val.disable) {
        this.triggerEvent('on-click', { val: e.currentTarget.dataset.val })
      }
    }
  },
  ready() {
    this.init()
  }
})
