// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    options:{
      autoplay:true,
      circular:true
    },
    currentSwiper:0,
    imageList:[
      {
        id:"1",
        text:"广告标题，若无则不展示",
        image:'../../static/images/imgList/1.jpg'
      },
      {
        id: "2",
        text: "广告标题，若无则不展示",
        image: '../../static/images/imgList/1.jpg'
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //轮播点点
    swiperChange(e) {
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  }
})
