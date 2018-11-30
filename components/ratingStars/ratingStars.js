// components/ratingStars/ratingStars.js
import { generateArr } from '../../utils';

Component({
  properties: {
    max: {
      type: Number,
      value: 5,
    },
    value: {
      type: String,
      value: 5,
      observer() {
        this.updateValue();
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    light: [0],
    gray: [5],
    isHalf: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateValue() {
      const radio = 5 / this.properties.max;
      const num = parseFloat(this.properties.value) * radio;
      const rest = parseInt(num.toString().split('.')[1], 10);
      const isHalf = rest !== 0;
      let light = Math.floor(num);
      if (!isHalf) {
        light += 1;
      }
      const gray = 5 - light - isHalf ? 1 : 0;
      const distLight = generateArr(light);
      const distGray = generateArr(gray);
      this.setData({ gray: distGray, isHalf, light: distLight });
    },
  },
});
