import { observer, mapStore } from '../../../store/tools'

const form = mapStore('ApplyForm')
Page(
  observer({
    data: {
      places: [{}]
    },
    props: { form },
    checkInChange(e) {
      const key = e.currentTarget.dataset.key
      const val = e.detail.value
      console.log(key, val)
      this.props.form.update(key, val)
    }
  })
)
