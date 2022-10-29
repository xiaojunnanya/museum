var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    naturalOcean:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean.png",
    naturalOcean01:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean01.png",
    naturalOcean02:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean02.png",
    naturalOcean03:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean03.png",
    naturalOcean04:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean04.png",
    naturalOcean05:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean05.png",
    naturalOcean06:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean06.png",
    naturalOcean07:app.globalData.baseUrlImg +"image/naturalOcean/naturalOcean07.png",
  },
  chineseAviation(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/chineseAviation/chineseAviation',
    })
  },
  tjNatural(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/tjNatural/tjNatural',
    })
  },
  tjSaveWater(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/tjSaveWater/tjSaveWater',
    })
  },
  hbWaterConservancy(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/hbWaterConservancy/hbWaterConservancy',
    })
  },
  hbSeaSalt(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/hbSeaSalt/hbSeaSalt',
    })
  },
  countryOcean(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/countryOcean/countryOcean',
    })
  },
  bjAstronomy(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/bjAstronomy/bjAstronomy',
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