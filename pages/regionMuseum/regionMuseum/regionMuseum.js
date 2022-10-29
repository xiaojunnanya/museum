var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    regionMuseum:app.globalData.baseUrlImg +"image/regionMuseum/regionMuseum.png",
    regionMuseumBJ:app.globalData.baseUrlImg +"image/regionMuseum/regionMuseumBJ.png",
    regionMuseumHB:app.globalData.baseUrlImg +"image/regionMuseum/regionMuseumHB.png",
    regionMuseumTJ:app.globalData.baseUrlImg +"image/regionMuseum/regionMuseumTJ.png",
    HB:{
      width: "170rpx",
      height: "100rpx",
      left: "38%",
      top: "48%"
    },
    BJ:{
      width: "135rpx",
      height: "135rpx",
      top: "67%",
      left: "60%"
    },
    TJ:{
      width: "175rpx",
      height: "120rpx",
      left: "21%",
      top: "67%"
    }
  },
  HB(e){
    wx.navigateTo({
      url: '/pages/regionMuseum/HBMuseum/HBMuseum/HBMuseum',
    })
  },
  TJ(e){
    wx.navigateTo({
      url: '/pages/regionMuseum/TJMuseum/TJMuseum/TJMuseum',
    })
  },
  BJ(e){
    wx.navigateTo({
      url: '/pages/regionMuseum/BJMuseum/BJMuseum/BJMuseum',
    })
  },
  // 河北开始点击动画
  HBTouchstart(e){
    this.setData({
      HB:{
        width: "150rpx",
        height: "90rpx",
        left: "39%",
        top: "48.5%"
      }
    })
  },
  // 河北结束点击动画
  HBTouchend(e){
    this.setData({
      HB:{
        width: "170rpx",
        height: "100rpx",
        left: "38%",
        top: "48%"
      }
    })
  },
  // 北京开始点击动画
  BJTouchstart(e){
    this.setData({
      BJ:{
        width: "115rpx",
        height: "115rpx",
        top: "67.5%",
        left: "61%"
      }
    })
  },
  // 北京结束点击动画
  BJTouchend(e){
    this.setData({
      BJ:{
        width: "135rpx",
        height: "135rpx",
        top: "67%",
        left: "60%"
      }
    })
  },
  // 天津开始点击动画
  TJTouchstart(e){
    this.setData({
      TJ:{
        width: "155rpx",
        height: "108rpx",
        left: "22%",
        top: "67.5%"
      }
    })
  },
  // 天津结束点击动画
  TJTouchend(e){
    this.setData({
      TJ:{
        width: "175rpx",
        height: "120rpx",
        left: "21%",
        top: "67%"
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})