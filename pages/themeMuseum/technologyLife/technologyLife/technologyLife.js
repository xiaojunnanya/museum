var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    technologyLife:app.globalData.baseUrlImg +"image/technologyLife/technologyLife.png",
    technologyLife01:app.globalData.baseUrlImg +"image/technologyLife/technologyLife01.png",
    technologyLife02:app.globalData.baseUrlImg +"image/technologyLife/technologyLife02.png",
    technologyLife03:app.globalData.baseUrlImg +"image/technologyLife/technologyLife03.png",
    technologyLife04:app.globalData.baseUrlImg +"image/technologyLife/technologyLife04.png",
    technologyLife05:app.globalData.baseUrlImg +"image/technologyLife/technologyLife05.png",
    technologyLife06:app.globalData.baseUrlImg +"image/technologyLife/technologyLife06.png",
    technologyLife07:app.globalData.baseUrlImg +"image/technologyLife/technologyLife07.png",
    technologyLife08:app.globalData.baseUrlImg +"image/technologyLife/technologyLife08.png",
  },
  bjTechnology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/bjTechnology/bjTechnology',
    })
  },
  bhTechnology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/bhTechnology/bhTechnology',
    })
  },
  tjElectric(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/tjElectric/tjElectric',
    })
  },
  chineseMapping(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/chineseMapping/chineseMapping',
    })
  },
  chineseScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/chineseScience/chineseScience',
    })
  },
  tjScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/tjScience/tjScience',
    })
  },
  hbScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/hbScience/hbScience',
    })
  },
  bjhdTechnology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/bjhdTechnology/bjhdTechnology',
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