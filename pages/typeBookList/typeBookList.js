// pages/typeBookList/typeBookList.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    label: '',
    isLoading: true,
  },

  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { type, label } = options;
    console.log(options);
    bookService.getBooksByType(type).then((o) => {
      this.setData({ books: o.subject_collection_items, label, isLoading: false });
    });
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

  },
});
