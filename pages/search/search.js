// pages/search/search.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: '',
    books: [],
    pageSize: 10,
    pageNo: 1,
    isEnd: false,
    loading: false
  },
  search() {
    this.setData({
      books: [],
      pageNo: 1,
      isEnd: false
    });
    this.getBooks();
  },


  handleInput(e) {
    const { value } = e.detail;
    this.setData({ query: value });
  },
  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  getBooks() {
    const { isEnd } = this.data;
    if (isEnd) {
      return;
    }
    this.setData({ loading: true });
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      mask: true,
      duration: 1000000,
    });
    const {
      pageSize, pageNo, query, books,
    } = this.data;
    bookService.search(query, pageSize * (pageNo - 1), pageSize).then((o) => {
      this.setData({ books: books.concat(o.books), isEnd: o.books.length < pageSize, pageNo: pageNo + 1 });
      wx.hideToast();
      this.setData({ loading: false });

    });
  },
  loadMore() {
    this.getBooks();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { query } = options;
    this.setData({ query });
    this.getBooks();
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
    console.log('pull');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('update');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
});
