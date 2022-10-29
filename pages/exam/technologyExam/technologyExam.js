var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{},//请求的数据
    answer:'',//单个选项的答案
    answerAll:[],//最终传出去的答案
    id:[],//传来的数据的id
    trueAnswer:[],//传来的真正的答案
    checked:'',//答题的时候存在页面上的答案
    hidden:true,//页面没有加载完前的蒙版
    showAnswer:false,//展示正确答案
    disabled:false,//提交完后禁止点击
  },
  //获取题号，并将答案传到数组中
  sendIndex(e){
    console.log("题号:"+e.currentTarget.dataset.index);
    //String转number
    var num = parseInt(this.data.answer);
    if(this.data.answer != ''){
      this.setData({
        [`answerAll[${e.currentTarget.dataset.index}]`]:num,
        answer:''//传一题答案，将答案清空，防止带到下一题中
      })
    }
    console.log(this.data.answerAll);
  },
  //获取回答的答案
  handleChange(e){
    //答案
    this.setData({
      answer:e.detail.value,
    })
    //若答完题没提交，点返回提示
    // wx.enableAlertBeforeUnload({
    //   message: "你尚未完成答题，确定要返回吗",
    //   success: function (res) {
    //     console.log("方法载入成功：", res)
    //   },
    //   fail: function (errMsg) {
    //     console.log("方法载入失败：", errMsg);
    //   },
    // }); 
  },
  //提交答案
  submit(e){
    console.log(this.data.answerAll);
    //判断是否答完题
    var num = 0;
    for (let i = 0; i < this.data.data.length; i++) {
      if(this.data.answerAll[i] != undefined){
        num++;
      }
    }
    //num与题目数相同，答完题
    if(num == this.data.data.length){
      console.log("全答完");
      var that = this

      //disabled为true说明已经提交了，false说明没提交
      //已经提交了告诉他已经提交不能提交了，但还是问他要查看答案吗
      if(that.data.disabled){
        //已经查看了答案，不用查看了
        if(that.data.showAnswer){
          wx.showModal({
            content: '您已提交答案，无需重复提交',
            showCancel:false
          })
        }else{
          wx.showModal({
            content: '您已提交答案，是否选择查看正确答案？',
            success(e){
              if(e.confirm){
                that.setData({
                  showAnswer:true,
                })
              }
            }
          })
        }
      }else{
        //没提交则判断登录啥的
        //先判断他是否登录过
        // 登录过：
        if(wx.getStorageSync('code')){
          var user_id = wx.getStorageSync("user_id");
          console.log(that.data.id);
          console.log(that.data.answerAll);
          console.log(user_id);
          wx.request({
            url: app.globalData.baseUrl +'grade/',
            method:"POST",
            data:{
              id:that.data.id,
              answer:that.data.answerAll,
              user_id:user_id
            },
            success(res3){
              console.log(res3);
              console.log("aa:"+res3.data.right);
              wx.showModal({
                content: '您最终答对' + res3.data.right + "道题",
                showCancel:false,
                success: function (res4) {
                  if (res4.confirm) {//这里是点击了确定以后
                    //点了确定之后询问是否查看正确答案
                    wx.showModal({
                      content: '您是否要查看正确答案',
                      success(res5){
                        //选择确定则禁用和显示答案
                        if(res5.confirm){
                          that.setData({
                            showAnswer:true,
                            disabled:true
                          })
                        }
                        //选择确定则禁用
                        if(res5.cancel){
                          that.setData({
                            disabled:true
                          })
                        }
                      }
                    })
                  }
                }
              })
            }
          })
        }else{//没有登录：
          //先给出提示信息是否登录
          wx.showModal({
            title: '提示',
            content: '您需先登录才能提交',
            success: function (res) {
              if (res.confirm) {//这里是点击了确定以后
                //点确定后提交：
                wx.getUserProfile({
                  desc: '授权信息不做其他用途',
                  success(e){
                    wx.login({
                      success(res1){
                        //确认后进行登录获取user_id
                        wx.setStorageSync('code', res1.code)
                        wx.request({
                          url:  app.globalData.baseUrl +'login/',
                          method:'POST',
                          data:{
                            code:res1.code
                          },
                          success(res2){
                            console.log(res2);
                            wx.setStorageSync('user_id', res2.data.user_id);
                            //获取到user_id后提交答案
                            wx.request({
                              url: app.globalData.baseUrl +'grade/',
                              method:"POST",
                              data:{
                                id:that.data.id,
                                answer:that.data.answerAll,
                                user_id:res2.data.user_id
                              },
                              success(res3){
                                console.log(res3);
                                console.log("aa:"+res3.data.right);
                                wx.showModal({
                                  content: '您最终答对' + res3.data.right + "道题",
                                  showCancel:false,
                                  success: function (res4) {
                                    if (res4.confirm) {//这里是点击了确定以后
                                      //点了确定之后询问是否查看正确答案
                                      wx.showModal({
                                        content: '您是否要查看正确答案',
                                        success(res5){
                                          //选择确定则禁用和显示答案
                                          if(res5.confirm){
                                            that.setData({
                                              showAnswer:true,
                                              disabled:true
                                            })
                                          }
                                          //选择确定则禁用
                                          if(res5.cancel){
                                            that.setData({
                                              disabled:true
                                            })
                                          }
                                        }
                                      })
                                    }
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            }
          })
        }
      }

    }else{
      wx.showModal({
        title: '提示',
        content: '先完成答题再点击提交',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("监听加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("初次渲染");
    //初次进来，取消监听
    // wx.disableAlertBeforeUnload()
    //显示加载界面
    wx.showLoading({  // 显示加载中loading效果 
      title: "加载中",
      mask: true  //开启蒙版遮罩
    });

    var that = this
    wx.request({
      url: app.globalData.baseUrl +'get_question/',
      method:"POST",
      data:{
        "type":"科技"
      },
      success(e){
        console.log(e);
        that.setData({
          data:e.data,//接受数据
        })
        //隐藏加载界面
        wx.hideLoading();
        for (let i = 0; i < e.data.length; i++) {
          that.setData({
            [`id[${i}]`]:e.data[i].id,
            [`trueAnswer[${i}]`]:e.data[i].answer,
            hidden:false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
   console.log("监听显示");
    //如果点击了选项，就有了答案，开启监听
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("卸载");
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