// pages/topicContent/topicContent.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    topic: {},
    meta: {},
    total: 0,
    id: '',
    pageSize: 20,
    isSeeLz: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    const { pageSize } = this.data;
    this.setData({ id });
    bookService.getForumTopicsByTid(id, pageSize).then((o) => {
      this.setData({ comments: o.comments, total: o.total });
    });
    bookService.getForumTopic(id).then((o) => {
      this.setData({ topic: o, meta: o.subject });
    });
  },

  onlySeeLz() {
    this.getComments(true);
    this.setData({ isSeeLz: true });
  },

  cancelOnlySeeLz() {
    this.getComments(false);
    this.setData({ isSeeLz: false });
  },

  getComments(isSeeLz) {
    const { id, pageSize } = this.data;
    bookService.getForumTopics(id, pageSize, 0, isSeeLz).then((o) => {
      this.setData({ comments: o.comments });
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
