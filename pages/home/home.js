import { observer, mapStore } from '../../store/tools'

const form = mapStore('ApplyForm')
Page(
  observer({
    data: {
      isFirstIn: true,
      location: '珠海',
      checkInDate: '',
      checkOutDate: '04-27 12:00',
      peopleIndex: 0,
      peopleCount: ['1', '2', '3', '不限'],
      hot: [
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432097404&di=3d74f91d095890b1c177cddae4e1e1b9&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F151129%2F14-15112910453S06.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432099750&di=01dabcf9a96723ff520f2040a2fbe36d&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140822%2F235027-140R2063G566.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432307558&di=b4a63adf310b5a99a9f04834dab42e32&imgtype=0&src=http%3A%2F%2Fimg2.ddove.com%2Fupload%2F20110906%2F060929484352.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432161727&di=17f10ef4696e6e2609cec35c61965ba2&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F78%2FFB%2FCii-T1jvScWIESXxAAYJYdIbGaYAAJL6QAn5RIABgl5200_w1024_h0_c0_t0.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432280874&di=d1319c86465b89a9cd49ab1ed48f38ee&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F960x600%2F1404094616397.jpg'
        }
      ],
      strategy: [
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432381231&di=f88b72c155cefab6d18a37c773018dce&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fcca5e1e548a195344dc0f8372f02ae22cb22461f.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432401728&di=fb82898fac6801322557a358a7752744&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2719638748%2C441411227%26fm%3D214%26gp%3D0.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432523626&di=474974a4abb9ed97eca3c4791da7d50a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-10-17%2F59e5694f53f03.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432590767&di=ec5a350e758acee638165f3cdcb96ddb&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1507%2Fcf%2F951245132ca376.jpg_r_1024x683x95_3f740655.jpg'
        },
        {
          img:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525432659348&di=a6ab239dac8f2b77caed510a1ba44849&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201407%2F28%2F20140728143126_Pcvd4.jpeg'
        }
      ]
    },
    props: {
      form
    },
    onLoad: function() {},
    getLocation() {
      wx.chooseLocation({
        success: res => {
          console.log('location ===>', res)
          this.props.form.update({ location: { ...res } })
          console.log(this.props.form)
        }
      })
    },
    dateChange(e) {
      this.setData({ checkInDate: e.detail.value })
    },
    peopleChange(e) {
      console.log(e.detail.value)
      this.setData({ peopleIndex: e.detail.value })
    },
    to(e) {
      wx.navigateTo({ url: e.currentTarget.dataset.url })
    },

    openAuthorize(e) {
      this.setData({ isFirstIn: false })
      console.log(e)
    }
  })
)
