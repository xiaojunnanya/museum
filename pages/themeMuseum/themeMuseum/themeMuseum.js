var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeMuseum:app.globalData.baseUrlImg +"image/themeMuseum/themeMuseum.png",
    themeMuseum01:app.globalData.baseUrlImg +"image/themeMuseum/themeMuseum01.png",
    themeMuseum02:app.globalData.baseUrlImg +"image/themeMuseum/themeMuseum02.png",
    themeMuseum03:app.globalData.baseUrlImg +"image/themeMuseum/themeMuseum03.png",
    themeMuseum04:app.globalData.baseUrlImg +"image/themeMuseum/themeMuseum04.png",
    earthGeology:{
      width: "300rpx",
      height: "160rpx",
      top: "12%",
      left:"7%"
    },
    lifeAnimal:{
      width: "300rpx",
      height: "160rpx",
      top: "12%",
      left:"53%"
    },
    naturalOcean:{
      width: "300rpx",
      height: "160rpx",
      top: "42%",
      left:"8%"
    },
    technologyLife:{
      width: "300rpx",
      height: "160rpx",
      top: "42%",
      left:"53%"
    }
  },
  // 地球-地质
  earthGeology(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/earthGeology/earthGeology/earthGeology',
    })
  },
  // 生命-动物
  lifeAnimal(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/lifeAnimal/lifeAnimal/lifeAnimal',
    })
  },
  // 自然-海洋
  naturalOcean(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/naturalOcean/naturalOcean/naturalOcean',
    })
  },
  // 科技-生活
  technologyLife(e){
    wx.navigateTo({
      url: '/pages/themeMuseum/technologyLife/technologyLife/technologyLife',
    })
  },
  // 地球-地质的开始点击动画
  earthGeologyTouchstart(e){
    this.setData({
      earthGeology:{
        width: "300rpx",
        height: "160rpx",
        top: "12%",
        left:"9%"
      }
    })
  },
  // 地球-地质的结束点击动画
  earthGeologyTouchend(e){
    this.setData({
      earthGeology:{
        width: "300rpx",
        height: "160rpx",
        top: "12%",
        left:"7%"
      }
    })
  },
  // 生命-动物的开始点击动画
  lifeAnimalTouchstart(e){
    this.setData({
      lifeAnimal:{
        width: "300rpx",
        height: "160rpx",
        top: "12%",
        left:"51%"
      }
    })
  },
  // 生命-动物的结束点击动画
  lifeAnimalTouchend(e){
    this.setData({
      lifeAnimal:{
        width: "300rpx",
        height: "160rpx",
        top: "12%",
        left:"53%"
      }
    })
  },
  // 自然-海洋的开始点击动画
  naturalOceanTouchstart(e){
    this.setData({
      naturalOcean:{
        width: "300rpx",
        height: "160rpx",
        top: "42%",
        left:"10%"
      }
    })
  },
  // 自然-海洋的结束点击动画
  naturalOceanTouchend(e){
    this.setData({
      naturalOcean:{
        width: "300rpx",
        height: "160rpx",
        top: "42%",
        left:"8%"
      }
    })
  },
  // 科技-生活的开始点击动画
  technologyLifeTouchstart(e){
    this.setData({
      technologyLife:{
        width: "300rpx",
        height: "160rpx",
        top: "42%",
        left:"51%"
      }
    })
  },
  // 科技-生活的结束点击动画
  technologyLifeTouchend(e){
    this.setData({
      technologyLife:{
        width: "300rpx",
        height: "160rpx",
        top: "42%",
        left:"53%"
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