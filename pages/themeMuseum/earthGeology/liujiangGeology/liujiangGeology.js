var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    describe:[],
    aboutImg:"",
    name:""
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
    var that = this
    wx.request({
      url: app.globalData.baseUrl +'get_describe/',
      method:"POST",
      data:{
        "name":"柳江地学博物馆"
      },
      success(e){
        that.setData({
          describe:e.data[0].describe,
          name:e.data[0].name,
        })
      }
    })
    wx.request({
      url: app.globalData.baseUrl +'get_image/',
      method:"POST",
      data:{
        "name":"柳江地学博物馆"
      },
      success(e){
        that.setData({
          aboutImg:e.data
        })
      }
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