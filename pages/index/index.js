//index.js
//获取应用实例
Page({
  data: {
    showPopup:false
  },
  onLoad: function () {
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function(){
    console.log("2");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("1");
  },
  //事件处理函数
  popupTaps(e){
    let passValue = e.detail.passValue;
    this.setData({
      showPopup:passValue
    })
  },
  //回到顶端
  goBackTops(){
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  //分享到朋友圈
  
})
