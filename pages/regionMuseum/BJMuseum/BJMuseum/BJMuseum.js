var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BJ:app.globalData.baseUrlImg +"image/BJ/BJ.png",
    BJ01:app.globalData.baseUrlImg +"image/BJ/BJ01.png",
    BJ02:app.globalData.baseUrlImg +"image/BJ/BJ02.png",
    BJ03:app.globalData.baseUrlImg +"image/BJ/BJ03.png",
    BJ04:app.globalData.baseUrlImg +"image/BJ/BJ04.png",
    BJ05:app.globalData.baseUrlImg +"image/BJ/BJ05.png",
    BJ06:app.globalData.baseUrlImg +"image/BJ/BJ06.png",
    BJ07:app.globalData.baseUrlImg +"image/BJ/BJ07.png",
    BJ08:app.globalData.baseUrlImg +"image/BJ/BJ08.png",
    BJ09:app.globalData.baseUrlImg +"image/BJ/BJ09.png",
    BJ10:app.globalData.baseUrlImg +"image/BJ/BJ10.png",
  },
  chineseGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/chineseGeology/chineseGeology',
    })
  },
  chineseAgriculture(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAgriculture/chineseAgriculture',
    })
  },
  bjNatural(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/bjNatural/bjNatural',
    })
  },
  chineseScience(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/chineseScience/chineseScience',
    })
  },
  bjTechnology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/bjTechnology/bjTechnology',
    })
  },
  chineseAnimal(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAnimal/chineseAnimal',
    })
  },
  bjFirstAid(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/bjFirstAid/bjFirstAid',
    })
  },
  bjAstronomy(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/bjAstronomy/bjAstronomy',
    })
  },
  chineseMapping(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/chineseMapping/chineseMapping',
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