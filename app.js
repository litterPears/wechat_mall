//app.js
let utils = require("utils/util.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    let logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    console.log(utils.formatTime(new Date()));
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
     /**
     * 获取用户信息，供各页面调用
     */
    getWechatInfo: (callback)=>{
      const that = this;
      // 1. 若全局userInfo存在，直接调用回调函数
      if (this.globalData.userInfo) {
        console.log(callback);
        typeof callback == "function" && callback(this.globalData.userInfo);
      }
      // 2. 若全局userInfo不存在，用wx.getUserInfo获取userInfo保存到全局
      else {
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo;
                typeof callback == "function" && callback(that.globalData.userInfo);
              }
            })
          }
        })
      }
    }
  },
  globalData: {
    userInfo: null,
    // 和baron接口调试置为true用前者baseUrl;本地接口调试置为false,使用后者baseUrl
    baseUrl: false ? "" : ""
  }
})