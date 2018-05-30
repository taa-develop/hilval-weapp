/**
 * @param {Array} imgs
 * @param {String} imgs[].id
 * @param {String} imgs[].url
 */

function computedList(imgs, c) {
  let imgArr = [...imgs]
  // 补全5张
  while (imgArr.length < 5) {
    imgArr = imgArr.concat(imgs)
  }
  const l = imgArr.length
  return imgArr.map((v, i) => {
    const typeClassMap = [
      { index: (c - 2 + l) % l, type: 'before' },
      { index: (c - 1 + l) % l, type: 'prev' },
      { index: c, type: 'curr' },
      { index: (c + 1) % l, type: 'next' },
      { index: (c + 2) % l, type: 'after' }
    ]
    return {
      ...v,
      typeClass: typeClassMap.some(t => i === t.index)
        ? typeClassMap.find(t => i === t.index).type
        : ''
    }
  })
}

Component({
  properties: {
    imgs: { type: Array },
    style: { type: String }
  },

  data: {
    imgsStyled: [], // 计算后的图片
    curr: 0, // 当前显示的索引
    playerTimer: null
  },

  // lifeCycle
  ready() {
    const imgsStyled = computedList(this.properties.imgs, this.data.curr)
    this.setData({ imgsStyled })

    // auto play
    this.setData({
      playerTimer: setInterval(() => {
        const curr = (this.data.curr + 1) % this.properties.imgs.length
        this.setData({
          curr,
          imgsStyled: computedList(this.properties.imgs, curr)
        })
      }, 5000)
    })
  },

  detached() {
    clearInterval(this.playerTimer)
  }
})
