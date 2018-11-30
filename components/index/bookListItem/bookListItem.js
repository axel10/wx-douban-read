// components/bookListItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    isFadeIn: {
      type: Boolean,
      value: false,
    },
  },

  attached() {
    if (this.properties.isFadeIn) {
      this.setData({ isLoaded: false });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoaded: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImgLoaded() {
      this.setData({ isLoaded: true });
    },
  },
});
