Component({
  properties: { data: { type: Object } },
  data: { level: '' },
  ready() {
    const mapLevel = ['舒适', '优选', '精选']
    this.setData({ level: mapLevel[this.properties.data.level] })
  }
})
