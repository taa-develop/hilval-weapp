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
  if (select.sort.value !== 'def') {
    params.page = { orderByColumn: 'price', ordeByType: 'asc' }
  }
  console.log('parmas', params)
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
    apiGetHouseList(getParams()).then(res => {
      this.houseList = [...res.data.data.queryHomestays.datas]
      this.hasNext = res.data.data.queryHomestays.page.hasNext
    })
  }

  getMore() {
    if (this.hasNext) {
      const lastRownum = this.houseList[this.houseList.length - 1].rownum || 1
      apiGetHouseList({ page: { pageSize: 10, lastRownum }, ...getParams() }).then(res => {
        this.houseList = [...this.houseList, ...res.data.data.queryHomestays.datas]
        this.hasNext = res.data.data.queryHomestays.page.hasNext
      })
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
        this.currHouseDetail = { ...res.data.data.homestayDetail }
        resolve({ ...res.data.data.homestayDetail })
      })
    })
  }
}

export default new House()
