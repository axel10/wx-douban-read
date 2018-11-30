// pages/mostHotBooks/mostHotBooks.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    title: '',
  },

  handleImgLoaded(e) {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    const { books } = this.data;
    books[index].show = true;
    this.setData({ books });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { type } = options;
    switch (type) {
      case 'fiction':
        this.setData({ title: '虚构类' });
        bookService.getBookFiction().then((o) => {
          o.subject_collection_items.forEach((item) => {
            item.show = false;
          });
          this.setData({ books: o.subject_collection_items });
        });
        break;
      case 'nonFiction':
        this.setData({ title: '非虚构类' });
        bookService.getBookNonfiction().then((o) => {
          o.subject_collection_items.forEach((item) => {
            item.show = false;
          });
          this.setData({ books: o.subject_collection_items });
        });
        break;
      default:
        break;
    }
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
