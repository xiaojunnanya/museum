var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TJ:app.globalData.baseUrlImg +"image/TJ/TJ.png",
    TJ01:app.globalData.baseUrlImg +"image/TJ/TJ01.png",
    TJ02:app.globalData.baseUrlImg +"image/TJ/TJ02.png",
    TJ03:app.globalData.baseUrlImg +"image/TJ/TJ03.png",
    TJ04:app.globalData.baseUrlImg +"image/TJ/TJ04.png",
    TJ05:app.globalData.baseUrlImg +"image/TJ/TJ05.png",
    TJ06:app.globalData.baseUrlImg +"image/TJ/TJ06.png",
    TJ07:app.globalData.baseUrlImg +"image/TJ/TJ07.png",
  },
  tjNatural(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/tjNatural/tjNatural',
    })
  },
  jixianGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/jixianGeology/jixianGeology',
    })
  },
  countryOcean(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/countryOcean/countryOcean',
    })
  },
  tjSaveWater(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/tjSaveWater/tjSaveWater',
    })
  },
  tjElectric(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/tjElectric/tjElectric',
    })
  },
  tjScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/tjScience/tjScience',
    })
  },
  bhTechnology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/bhTechnology/bhTechnology',
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