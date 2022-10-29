var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectTheme:app.globalData.baseUrlImg +"image/selectTheme.png",
    selectTheme01:app.globalData.baseUrlImg +"image/selectTheme01.png",
    selectTheme02:app.globalData.baseUrlImg +"image/selectTheme02.png",
    themeMuseum:{
      width:"350rpx",
      height:"350rpx",
      top:"6%",
      left:"15%"
    },
    regionMuseum:{
      width: "350rpx",
      height: "350rpx",
      left: "43%",
      top: "50%"
    }
  },
  selectExam(e){
    wx.navigateTo({
      url: '/pages/selectExam/selectExam',
    })
  },
  // 主题博物馆体验的点击
  themeMuseum(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/themeMuseum/themeMuseum',
    })
  },
  // 区域博物馆体验的点击
  regionMuseum(e){
    wx.navigateTo({
      url: '/pages/regionMuseum/regionMuseum/regionMuseum',
    })
  },
  // 主题博物馆的开始点击动画
  themeMuseumTouchstart(e){
    this.setData({
      themeMuseum:{
        width:"380rpx",
        height:"380rpx",
        top:"5%",
        left:"13%"
      }
    })
  },
  // 主题博物馆的结束点击动画
  themeMuseumTouchend(e){
    this.setData({
      themeMuseum:{
        width:"350rpx",
        height:"350rpx",
        top:"6%",
        left:"15%"
      }
    })
  },
  // 区域博物馆的开始点击动画
  regionMuseumTouchstart(e){
    this.setData({
      regionMuseum:{
        width: "380rpx",
        height: "380rpx",
        left: "42%",
        top: "48.5%"
      }
    })
  },
  // 区域博物馆的结束点击动画
  regionMuseumTouchend(e){
    this.setData({
      regionMuseum:{
        width: "350rpx",
        height: "350rpx",
        left: "43%",
        top: "50%"
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
    console.log(app.globalData.backgroundAudio);
    // app.globalData.backgroundAudio.src = "/voice/suoni.mp3";
    app.globalData.backgroundAudio.autoplay = true
    app.globalData.backgroundAudio.onEnded((res)=>{
      app.globalData.backgroundAudio.play()
    })
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