import { observer, mapStore, setStore } from '../../store/tools'

const select = mapStore('BusinessSelect')
const house = mapStore('House')
Page(
  observer({
    props: { select, house },

    goto(e) {
      // 保存查看的houseID
      const { id } = e.currentTarget.dataset
      const type = 'homestay'
      setStore(house, { currHouseId: id })
      wx.navigateTo({ url: `/pages/${type}-detail/${type}-detail?id=${id}` })
    },

    link(e) {
      const { url } = e.currentTarget.dataset
      wx.navigateTo({ url })
    },

    loadMore(e) {
      house.getMore()
    },

    updateKeyword(e) {
      const keyword = e.detail.value
      setStore(select, { keyword })
      house.getList()
    },

    // lifecycle
    onLoad() {
      house.getTypes()
    },

    onShow() {
      house.getList()
    }
  })
)
