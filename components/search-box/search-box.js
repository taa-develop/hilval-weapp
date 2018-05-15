Component({
  properties: { defText: { type: String } },
  data: { text: '' },
  methods: {
    onInput(e) {
      this.setData({ text: e.detail.value })
      this.triggerEvent('on-input', { value: e.detail.value })
    },
    clear() {
      this.setData({ text: '' })
      this.triggerEvent('on-clear', { value: '' })
    },

    submit(e) {
      this.triggerEvent('on-submit', { value: e.detail.value })
    }
  },

  // lifecycle
  ready() {
    this.setData({ text: this.properties.defText || '' })
  }
})
