// pages/hotelFilter/hotelFilter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // region: ['宝安区','南山区','福田区','龙岗区'],
    region: [
      {
        code: 201,
        name: '宝安区'
      },
      {
        code: 306,
        name: '南山区'
      },
      {
        code: 107,
        name: '福田区'
      },
      {
        code: 318,
        name: '龙岗区'
      },
      {
        code: 219,
        name: '龙华区'
      }
    ],
    regionIndex: 1
  },

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log('picker发送选择改变，携带code为', this.data.region[e.detail.value].code)
    this.setData({
      regionIndex: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})