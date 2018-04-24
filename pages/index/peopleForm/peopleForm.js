import { observer, mapStore } from '../../../store/tools'

const form = mapStore('ApplyForm')
Page(
  observer({
    data: {
      people: [
        { label: '1人', val: 1 },
        { label: '2人', val: 2 },
        { label: '3人', val: 3 },
        { label: '4人', val: 4 },
        { label: '5人', val: 5 },
        { label: '10人以上', val: 10 }
      ]
    },
    props: { form },
    peopleChange(e) {
      const val = e.currentTarget.dataset.val
      const obj = this.data.people.filter(v => v.val === val)[0]
      this.props.form.update('people', obj)
      wx.navigateBack({ delta: 1 })
    }
  })
)
