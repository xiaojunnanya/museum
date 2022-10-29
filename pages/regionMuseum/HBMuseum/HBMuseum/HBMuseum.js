var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HB:app.globalData.baseUrlImg +"image/HB/HB.png",
    HB01:app.globalData.baseUrlImg +"image/HB/HB01.png",
    HB02:app.globalData.baseUrlImg +"image/HB/HB02.png",
    HB03:app.globalData.baseUrlImg +"image/HB/HB03.png",
    HB04:app.globalData.baseUrlImg +"image/HB/HB04.png",
    HB05:app.globalData.baseUrlImg +"image/HB/HB05.png",
    HB06:app.globalData.baseUrlImg +"image/HB/HB06.png",
    HB07:app.globalData.baseUrlImg +"image/HB/HB07.png",
    HB08:app.globalData.baseUrlImg +"image/HB/HB08.png",
    HB09:app.globalData.baseUrlImg +"image/HB/HB09.png",
    HB10:app.globalData.baseUrlImg +"image/HB/HB10.png",
    HB11:app.globalData.baseUrlImg +"image/HB/HB11.png",
    HB12:app.globalData.baseUrlImg +"image/HB/HB12.png",
  },
  chineseAncient(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAncient/chineseAncient',
    })
  },
  hbWaterConservancy(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/hbWaterConservancy/hbWaterConservancy',
    })
  },
  HBGEOEarth(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/HBGEOEarth/HBGEOEarth',
    })
  },
  HBGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/HBGeology/HBGeology',
    })
  },
  hbScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/hbScience/hbScience',
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
  qhdBird(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/qhdBird/qhdBird',
    })
  },
  shell(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/shell/shell',
    })
  },
  chineseAviation(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/chineseAviation/chineseAviation',
    })
  },
  chineseTangshang(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/chineseTangshang/chineseTangshang',
    })
  },
  hbSeaSalt(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/hbSeaSalt/hbSeaSalt',
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