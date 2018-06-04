import { observable, mapStore } from './tools'
import { apiGetHouseList, apiGetHouseDetail, apiGetHouseTypes } from '../api/houseList'

function getParams() {
  // 从其他相关的store中获取请求参数
  const select = mapStore('BusinessSelect')
  const form = mapStore('ApplyForm')
  const params = {}
  params.keyword = select.keyword
  params.intoDay = form.startDateText
  params.queitDay = form.endDateText
  params.dictHouseTypeCodes = [...select.types.map(v => v.code)]
  params.minPrice = select.price.min
  params.maxPrice = select.price.max
  params.quantity = form.peopleIndex
  params.page = { orderByColumn: 'price', orderByType: select.sort.value }
  return params
}

class House {
  constructor() {
    observable(this, {
      houseList: [],
      hasNext: false,
      houseTypes: [],
      fliter: {},
      currHouseId: '',
      currHouseDetail: {}
    })
  }

  getList() {
    return new Promise(resolve => {
      apiGetHouseList(getParams()).then(res => {
        const formateList = [
          ...res.data.data.queryHomestays.datas.map(v => ({
            ...v,
            picture: `https://source.hilval.com/${v.picture}`
          }))
        ]
        this.houseList = formateList
        this.hasNext = res.data.data.queryHomestays.page.hasNext
        resolve(formateList)
      })
    })
  }

  getMore() {
    if (this.hasNext) {
      // bug: 过滤条件不应该包含在'page'对象里面
      const lastRownum = this.houseList[this.houseList.length - 1].rownum || 1
      const params = getParams()
      apiGetHouseList({ ...params, page: { pageSize: 10, lastRownum, ...params.page } }).then(
        res => {
          this.houseList = [...this.houseList, ...res.data.data.queryHomestays.datas]
          this.hasNext = res.data.data.queryHomestays.page.hasNext
        }
      )
    }
  }

  getTypes() {
    apiGetHouseTypes().then(res => {
      console.log(res)
      const types = [...res.data.data.queryHouseType]
      this.houseTypes = types.map(obj => ({ id: obj.id, label: obj.label, code: obj.code }))
    })
  }

  getHouseDetail(houseId) {
    return new Promise((resolve, reject) => {
      apiGetHouseDetail(houseId).then(res => {
        const resData = {
          ...res.data.data.homestayDetail,
          picture: `https://source.hilval.com/${res.data.data.homestayDetail.picture}`
        }
        this.currHouseDetail = resData
        resolve(resData)
      })
    })
  }
}

export default new House()
