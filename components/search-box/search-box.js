Component({
  properties: {},
  data: { text: '' },
  methods: {
    onInput(e) {
      this.setData({ text: e.detail.value })
      this.triggerEvent('on-input', { value: e.detail.value })
    },
    clear() {
      this.setData({ text: '' })
      this.triggerEvent('on-input', { value: '' })
    }
  }
})
