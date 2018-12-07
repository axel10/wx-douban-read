// pages/commentList/commentList.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    orderBy: 'hot',
    loading: true,
    pageSize: 20,
    pageNo: 1,
    id: '',
    total:0
  },

  changeSort(e) {
    const { sort: orderBy } = e.currentTarget.dataset;
    this.setData({ orderBy });
    this.getComments();
  },

  toNextPage(e) {
    this.setData({ pageNo: this.data.pageNo + 1 });
    this.getComments();
  },
  toPrevPage() {
    this.setData({ pageNo: this.data.pageNo - 1 });
    this.getComments();
  },

  getComments() {
    this.setData({ loading: true });
    const {
      pageSize, id, orderBy, pageNo,
    } = this.data;
    const start = pageSize * (pageNo - 1);
    bookService.getInterests(id, pageSize, orderBy, start).then((o) => {
      this.setData({ comments: o.interests, loading: false ,total:o.total});
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    this.setData({ id });
    this.getComments();
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
