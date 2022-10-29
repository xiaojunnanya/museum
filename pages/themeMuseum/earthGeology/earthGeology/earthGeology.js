var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    earthGeology:app.globalData.baseUrlImg +"image/earthGeology/earthGeology.png",
    earthGeology01:app.globalData.baseUrlImg +"image/earthGeology/earthGeology01.png",
    earthGeology02:app.globalData.baseUrlImg +"image/earthGeology/earthGeology02.png",
    earthGeology03:app.globalData.baseUrlImg +"image/earthGeology/earthGeology03.png",
    earthGeology04:app.globalData.baseUrlImg +"image/earthGeology/earthGeology04.png",
    earthGeology05:app.globalData.baseUrlImg +"image/earthGeology/earthGeology05.png",
    earthGeology06:app.globalData.baseUrlImg +"image/earthGeology/earthGeology06.png",
    earthGeology07:app.globalData.baseUrlImg +"image/earthGeology/earthGeology07.png",
  },
  chineseGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/chineseGeology/chineseGeology',
    })
  },
  chineseTangshang(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/chineseTangshang/chineseTangshang',
    })
  },
  hotGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/hotGeology/hotGeology',
    })
  },
  liujiangGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/liujiangGeology/liujiangGeology',
    })
  },
  jixianGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/jixianGeology/jixianGeology',
    })
  },
  HBGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/HBGeology/HBGeology',
    })
  },
  HBGEOEarth(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/HBGEOEarth/HBGEOEarth',
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