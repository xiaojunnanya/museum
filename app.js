// app.js
App({
  onLaunch() {
    //初始化
    this.globalData.backgroundAudio =  wx.createInnerAudioContext()
  },
  globalData: {
    backgroundAudio : null,
    baseUrlImg:"https://vip.jzab.xyz/static/",
    baseUrl:"https://vip.jzab.xyz/"
  }
})
