//index.js
//获取应用实例
Page({
  data: {
    showPopup:false
  },
  onLoad: function () {
    
  },
  //事件处理函数
  popupTaps(e){
    console.log(e);
    this.setData({
      showPopup:true
    })
  }
})
