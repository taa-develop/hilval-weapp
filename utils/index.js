// 封装'navigate to'方法
function navTo(event) {
  const { url } = event.currentTarget.dataset
  let urlStr = `/pages/${url}/${url}`
  if (url.indexOf('?') !== -1) {
    const path = url.split('?')
    urlStr = `/pages/${path[0]}/${path[0]}?${path[1]}`
  }
  wx.navigateTo({
    url: urlStr
  })
}

// date format
function dateFormat(timestamp) {
  const date = new Date(timestamp)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const zero = num => (num > 9 ? num : `0${num}`)
  return `${y}-${zero(m)}-${zero(d)}`
}

export { navTo, dateFormat }
