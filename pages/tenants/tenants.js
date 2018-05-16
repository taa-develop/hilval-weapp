import { navTo } from '../../utils/index'
import { observer, mapStore } from '../../store/tools'
import { apiDeleteTraveler } from '../../api/user-info'

const user = mapStore('User')

Page(
  observer({
    props: { user },

    goto: e => navTo(e),

    handleEdit(e) {
      const { id } = e.currentTarget.dataset
      wx.navigateTo({ url: `/pages/edit-tenant/edit-tenant?id=${id}` })
    },

    handleDelete(e) {
      const { id } = e.currentTarget.dataset
      wx.showModal({
        title: '提示',
        content: '是否确定删除该记录?',
        success: res => {
          if (res.confirm) {
            apiDeleteTraveler(id).then(() => {
              user.getTraveler()
            })
          }
        }
      })
    },

    // lifecycle
    onShow() {
      user.getTraveler()
    }
  })
)
