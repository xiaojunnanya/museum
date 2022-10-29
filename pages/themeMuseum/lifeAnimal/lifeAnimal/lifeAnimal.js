var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lifeAnimal:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal.png",
    lifeAnimal01:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal01.png",
    lifeAnimal02:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal02.png",
    lifeAnimal03:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal03.png",
    lifeAnimal04:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal04.png",
    lifeAnimal05:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal05.png",
    lifeAnimal06:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal06.png",
    lifeAnimal07:app.globalData.baseUrlImg +"image/lifeAnimal/lifeAnimal07.png",
  },
  qhdBird(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/qhdBird/qhdBird',
    })
  },
  bjFirstAid(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/bjFirstAid/bjFirstAid',
    })
  },
  bjNatural(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/bjNatural/bjNatural',
    })
  },
  shell(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/shell/shell',
    })
  },
  chineseAnimal(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAnimal/chineseAnimal',
    })
  },
  chineseAncient(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAncient/chineseAncient',
    })
  },
  chineseAgriculture(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/chineseAgriculture/chineseAgriculture',
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