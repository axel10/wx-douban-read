/**
 * 获取日时间间隔
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @return {number}
 */
export function getDistanceDay(date1, date2) {
  const s = Math.abs(Date.parse(date1) - Date.parse(date2));
  return Math.floor(s / (1000 * 3600 * 24));
}

/**
 * 获取月时间间隔
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @return {number}
 */
export function getDistanceMouth(date1, date2) {
  const s = Math.abs(Date.parse(date1) - Date.parse(date2));
  return Math.floor(s / (1000 * 3600 * 24 * 30));
}

/**
 * 获取年时间间隔
 * @param {Date|string} date1
 * @param {Date|string} date2
 * @return {number}
 */
export function getDistanceYear(date1, date2) {
  const s = Math.abs(Date.parse(date1) - Date.parse(date2));
  return Math.floor(s / (1000 * 3600 * 24 * 30 * 12));
}

/**
 * 获取时间间隔字符串
 * @param {Date|string} targetTime
 * @return {string}
 */
export function getTimeDistanceString(targetTime) {
  const distDay = getDistanceDay(targetTime, new Date());
  const distMouth = getDistanceMouth(targetTime, new Date());
  const distYear = getDistanceYear(targetTime, new Date());

  if (distDay < 1) {
    return '今天';
  }
  if (distDay < 30) {
    return `${distDay}天前`;
  }
  if (!distYear) {
    return `${distMouth}月前`;
  }
  return `${distYear}年前`;
}

/**
 * 生成数组
 * @param {number} num
 * @return {Array}
 */
export function generateArr(num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(0);
  }
  return res;
}

/**
 * 监视属性变化
 * @param {Object} obj 属性所在的对象
 * @param {string} key 键
 * @param {Function} fn 要执行的函数
 * @param {Object} that this对象
 * @return {*}
 */
export function watch(obj, key, fn, that) {
  let val;
  Object.defineProperty(obj, key, {
    set(v) {
      setTimeout(() => {
        fn.apply(that);
      });
      val = v;
    },
    get() {
      return val;
    },
  });
}
