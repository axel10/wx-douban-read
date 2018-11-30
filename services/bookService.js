import request from '../utils/request';

export default {
  getBookFiction() {
    return request.get('/subject_collection/book_fiction/items');
  },
  getBookNonfiction() {
    return request.get('/subject_collection/book_nonfiction/items');
  },
  getStoreBook() {
    return request.get('/subject_collection/market_product_book_mobile_web/items');
  },
  search(q) {
    return request.get(`https://douban.uieee.com/v2/book/search?q=${q}`);
  },
  getBookDetail(id) {
    return request.get(`/book/${id}`);
  },
  getBooksByType(type) {
    return request.get(`/subject_collection/filter_book_${type}_hot/items`);
  },

  /**
   * 获取短评
   * @param {string} id 文章id
   * @param {number} count 获取总数
   * @param {string} orderBy 排序方式（hot或order）
   * @param {number} start 起始位置
   * @return {*}
   */
  getInterests(id, count = 4, orderBy = 'hot', start = 0) {
    return request.get(`/book/${id}/interests?count=${count}&order_by=${orderBy}&start=${start}&ck=mkAv&for_mobile=1`);
  },


  /**
   * 获取讨论
   * @param {string} id 文章id
   * @param {number} count 获取总数
   * @param {number} start 起始位置
   * @param {boolean} onlySeeLz 是否只看楼主
   * @return {*}
   */
  getForumTopics(id, count = 4, start = 0) {
    return request.get(`/book/${id}/forum_topics?count=${count}&start=${start}`);
  },

  /**
   * 根据讨论帖子id获取讨论
   * @param {string} id 文章id
   * @param {number} count 获取总数
   * @param {number} start 起始位置
   * @param {boolean} onlySeeLz 是否只看楼主
   * @return {*}
   */
  getForumTopicsByTid(id, count = 4, start = 0, onlySeeLz = false) {
    return request.get(`/forum_topic/${id}/comments?count=${count}&start=${start}${onlySeeLz ? '&only_author=1' : ''}`);
  },

  /**
   * 根据讨论id获取讨论详情
   * @param id
   * @return {*}
   */
  getForumTopic(id) {
    return request.get(`/forum_topic/${id}`);
  },
  /**
   * 获取书评
   * @param {string} id 文章id
   * @param {number} count 获取总数
   * @param {number} start 起始位置
   * @return {*}
   */
  getReviews(id, count = 4, start = 0) {
    return request.get(`/book/${id}/reviews?count=${count}&start=${start}`);
  },

  /**
   * 根据id获取单条读书笔记
   * @param id
   * @return {*}
   */
  getReview(id) {
    return request.get(`/review/${id}`);
  },

  /**
   * 获取读书笔记
   * @param {string} id 文章id
   * @param {number} count 获取总数
   * @param {number} start 起始位置
   * @return {*}
   */
  getAnnotations(id, count = 4, start = 0) {
    return request.get(`/book/${id}/annotations?count=${count}&start=${start}&ck=mkAv&for_mobile=1`);
  },

  /**
   * 根据id获取单条读书笔记
   * @param id
   * @return {*}
   */
  getAnnotation(id) {
    return request.get(`/annotation/${id}`);
  },
};
