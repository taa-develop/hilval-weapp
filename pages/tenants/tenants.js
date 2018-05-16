import { navTo } from '../../utils/index'
import { observer, mapStore } from '../../store/tools'

const user = mapStore('User')

Page(
  observer({
    props: { user },

    goto: e => navTo(e),

    handleEdit(e) {
      const { id } = e.currentTarget.dataset
      wx.navigateTo({ url: `/pages/edit-tenant/edit-tenant?id=${id}` })
    },

    // lifecycle
    onShow() {
      user.getTraveler()
    }
  })
)
