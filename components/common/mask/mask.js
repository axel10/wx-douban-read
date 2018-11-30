// components/common/mask/mask.js
Component({
  attached() {
    wx.showToast({
      title: this.properties.tip,
      icon: 'loading',
      mask: true,
      duration: 1000000,
    });
  },
  detached() {
    wx.hideToast();
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tip: {
      type: String,
      value: '正在加载',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
