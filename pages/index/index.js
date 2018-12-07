// pages/index/index.js
import bookService from '../../services/bookService';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    fictions: [],
    nonfictions: [],
    storeBooks: [],
    storeHeader: {},
    types: [
      { title: '小说', key: 'fiction' },
      { title: '爱情', key: 'love' },
      { title: '历史', key: 'history' },
      { title: '外国文学', key: 'foreign' },
      { title: '青春', key: 'youth' },
      { title: '励志', key: 'motivation' },
      { title: '随笔', key: 'essay' },
      { title: '传记', key: 'biography' },
    ],
    goodBooks: [
      { title: '小波看书' },
      { title: '村上春树周边' },
      { title: '我凭名字认定了你' },
      { title: '不可饶恕的女人们' },
      { title: '爱欲书' },
      { title: '他们还写侦探小说' },
      { title: '人生识字始忧患' },
      { title: '詩歌書店' },
    ],
  },

  toTypeList(e) {
    const { key, label } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/typeBookList/typeBookList?type=${key}&label=${label}`
    });
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  },

  toNonFiction() {
    wx.navigateTo({
      url: '/pages/mostHotBooks/mostHotBooks?type=nonFiction',
    });
  },
  toFiction() {
    wx.navigateTo({
      url: '/pages/mostHotBooks/mostHotBooks?type=fiction',
    });
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
    let count = 3;
    const that = this;
    const checkOver = () => {
      count -= 1;
      if (count === 0) {
        that.setData({ isLoading: false });
      }
    };
    bookService.getBookFiction().then((o) => {
      this.setData({ fictions: o.subject_collection_items });
      checkOver();
    });
    bookService.getBookNonfiction().then((o) => {
      this.setData({ nonfictions: o.subject_collection_items });
      checkOver();
    });
    bookService.getStoreBook().then((o) => {
      this.setData({
        storeBooks: o.subject_collection_items,
        storeHeader: o.header,
      });
      checkOver();
    });
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
