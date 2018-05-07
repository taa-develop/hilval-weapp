import gql from './nanographql'

const baesUrl = 'https://api.hilval.com/hilval-web/graphql'

function query(token, str, params, successCallback, errorCallback) {
  wx.request({
    url: baesUrl,
    data: gql(`query ${str}`)(params),
    method: 'POST',
    header: token,
    success: res => successCallback && successCallback(res),
    fail: err => errorCallback && errorCallback(err)
  })
}
function mutation(str, params, successCallback, errorCallback) {
  wx.request({
    url: baesUrl,
    data: gql(`mutation ${str}`)(params),
    method: 'POST',
    header: { token: '12321312' },
    success: res => successCallback && successCallback(res),
    fail: err => errorCallback && errorCallback(err)
  })
}
export { query, mutation, baesUrl }
