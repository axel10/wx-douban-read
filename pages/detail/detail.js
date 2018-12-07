// pages/detail/detail.js
import bookService from '../../services/bookService';
import {
  getTimeDistanceString,
} from '../../utils';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    author: '',
    interests: {}, // 短评
    forumTopics: {}, // 讨论
    reviews: [], // 书评
    annotations: [], // 读书笔记
    isLoading: true,
    isCollapseContent: true,
    intro: '',
    id: '',
  },

  expandIntro() {
    this.setData({ isCollapseContent: false });
  },

  toInterests() {
    wx.navigateTo({
      url: `/pages/commentList/commentList?id=${this.data.id}`,
    });
  },
  toForum() {
    wx.navigateTo({
      url: `/pages/forum/forum?id=${this.data.id}`,
    });
  },
  toAnnotationList() {
    wx.navigateTo({
      url: `/pages/annotationList/annotationList?id=${this.data.id}`,
    });
  },
  toReviewList() {
    wx.navigateTo({
      url: `/pages/reviewList/reviewList?id=${this.data.id}`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    const { id } = options;
    bookService.getBookDetail(id).then((o) => {
      this.setData({ data: o, isLoading: false, id });

      setTimeout(() => {
        const query = wx.createSelectorQuery();
        query.select('#detailContent').boundingClientRect();
        query.exec((res) => {
          const fontCount = 23 * 3 - 3;
          const intro = o.intro.substring(0, fontCount);
          // debugger
          that.setData({ intro });
        });
      });
    });
    // 获取讨论
    bookService.getForumTopics(id).then((o) => {
      this.setData({ forumTopics: o });
    });
    // 获取短评
    bookService.getInterests(id).then((o) => {
      o.interests.forEach((item) => {
        item.timeDistance = getTimeDistanceString(item.create_time);
      });
      this.setData({ interests: o });
    });
    // 获取读书笔记
    bookService.getAnnotations(id).then((o) => {
      this.setData({ annotations: o });
    });
    // 获取书评
    bookService.getReviews(id).then((o) => {
      this.setData({ reviews: o });
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
