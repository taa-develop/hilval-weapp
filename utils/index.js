// 封装'navigate to'方法
function navTo(event) {
  const { url } = event.currentTarget.dataset
  wx.navigateTo({
    url: `/pages/${url}/${url}`
  })
}

export { navTo }
