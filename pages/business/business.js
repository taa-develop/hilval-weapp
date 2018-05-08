import { observer, mapStore } from '../../store/tools'
import { apiGetHouseList } from '../../api/houseList'

const select = mapStore('BusinessSelect')
Page(
  observer({
    data: {
      list: [
        {
          id: 'hotel001',
          type: 'hotel',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524914050487&di=d7025c859bf5f1f3264d010aae46c348&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F0A%2F69%2FwKgB6lPIvI6AE9diAAU1YYsk2Ro53.rbook_comment.w1024.jpeg',
          level: 2,
          name: '小酒馆sdjofjdjfoiewjfojewofijewiofjeiwojfiewjrioioewriowpekfopwekropweirp',
          score: 4.5,
          tags: ['免押金', '高配置', '豪华'],
          price: '99999'
        },
        {
          id: 'hotel002',
          type: 'hotel',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524914050487&di=d7025c859bf5f1f3264d010aae46c348&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F0A%2F69%2FwKgB6lPIvI6AE9diAAU1YYsk2Ro53.rbook_comment.w1024.jpeg',
          level: 2,
          name: '小酒馆sdjofjdjfoiewjfojewofijewiofjeiwojfiewjrioioewriowpekfopwekropweirp',
          score: 4.5,
          tags: ['免押金', '高配置', '豪华'],
          price: '999'
        },
        {
          id: 'hotel003',
          type: 'homestay',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524914050487&di=d7025c859bf5f1f3264d010aae46c348&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F0A%2F69%2FwKgB6lPIvI6AE9diAAU1YYsk2Ro53.rbook_comment.w1024.jpeg',
          level: 2,
          name: '小酒馆sdjofjdjfoiewjfojewofijewiofjeiwojfiewjrioioewriowpekfopwekropweirp',
          score: 4.5,
          tags: ['免押金', '高配置', '豪华'],
          price: '999'
        },
        {
          id: 'hotel004',
          type: 'homestay',
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524914050487&di=d7025c859bf5f1f3264d010aae46c348&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F0A%2F69%2FwKgB6lPIvI6AE9diAAU1YYsk2Ro53.rbook_comment.w1024.jpeg',
          level: 2,
          name: '小酒馆sdjofjdjfoiewjfojewofijewiofjeiwojfiewjrioioewriowpekfopwekropweirp',
          score: 4.5,
          tags: ['免押金', '高配置', '豪华'],
          price: '999'
        }
      ]
    },
    props: { select },
    goto(e) {
      const { id, type } = e.currentTarget.dataset
      wx.navigateTo({ url: `/pages/${type}-detail/${type}-detail?id=${id}` })
    },
    link(e) {
      const { url } = e.currentTarget.dataset
      wx.navigateTo({ url })
    },
    onLoad() {
      // console.log('house list api', apiGetHouseList())
    }
  })
)
