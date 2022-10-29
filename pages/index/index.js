var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexClick:app.globalData.baseUrlImg +"image/indexClick.png",
    index:app.globalData.baseUrlImg +"image/index.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  into(e){
    wx.navigateTo({
      // url: '/pages/selectTheme/selectTheme',
      url: '/pages/exam/technologyExam/technologyExam',
    })
  },
  // cd(e){
  //   //获取状态
  //   console.log(app.globalData.backgroundAudio.paused);
  //   //true:处于暂停状态
  //   if(app.globalData.backgroundAudio.paused){
  //     app.globalData.backgroundAudio.play()
  //   }else{
  //     app.globalData.backgroundAudio.pause()
  //   }
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.login({
      success(e){
        console.log(e.code);
      }
    })
    //外面页面用bloom，点进去用suoni，答题用children
    console.log(app.globalData.backgroundAudio);
    // app.globalData.backgroundAudio.src = "/voice/Blooming.mp3";
    app.globalData.backgroundAudio.autoplay = true
    app.globalData.backgroundAudio.onEnded((res)=>{
      app.globalData.backgroundAudio.play()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachwidth: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})