Component({
  properties: {
    data: {
      type: Object
    }
  },
  data: {
    type: {}
  },
  ready() {
    const typeCode = this.properties.data.type
    const mapType = [
      { class: 'lg', text: '旅馆' },
      { class: 'jd', text: '酒店' },
      { class: 'ms', text: '民宿' }
    ]
    this.setData({ type: mapType[typeCode] })
  }
})
