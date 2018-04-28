Component({
  properties: {
    data: { type: Object, value: { text: '', url: '' } }
  },
  methods: {
    goto() {
      wx.navigateTo({ url: this.properties.data.url })
    }
  }
})
