// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    popShow:{
      type:Boolean,
      value:false
    },
    popText:{
      type:String,
      value:"已加入购物车"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  observers:{
    "popShow"(value){
      if(value){
        let timerOut = setTimeout(() => {
          this.setData({
            popShow: false
          });
          clearTimeout(timerOut);
        }, 2500);
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
