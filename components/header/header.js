// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    isShowMenu: false,
    query: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toHome() {
      wx.navigateTo({
        url: '/pages/index/index',
      });
    },
    showMenu() {
      this.setData({ isShowMenu: true });
    },
    hideMenu() {
      this.setData({ isShowMenu: false });
    },
    toSearch() {
      console.log('search');
      wx.navigateTo({
        url: `/pages/search/search?query=${this.data.query}`,
      });
    },
    handleInput(e) {
      const { value } = e.detail;
      this.setData({ query: value });
    },
  },
});
