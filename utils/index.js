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

export { navTo }
