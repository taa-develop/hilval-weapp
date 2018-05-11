import gql from './nanographql'

const baesUrl = 'https://api.hilval.com/hilval-web/graphql'
const request = (
  type,
  token = () => {
    throw 'token is missing'
  },
  str = () => {
    throw 'operetion string is missing'
  },
  params
) => (resolve, reject) => {
  wx.request({
    url: baesUrl,
    data: gql(`${type} ${str}`)(params),
    method: 'POST',
    header: token,
    success: res => resolve(res),
    fail: err => reject(err)
  })
}

function query(token, str, params) {
  return new Promise(request('query', token, str, params))
}
function mutation(token, str, params) {
  return new Promise(request('mutation', token, str, params))
}

export { query, mutation, baesUrl }
