import qs from '../lib/qs';
import { baseUrl } from './config';

function getRandom() {
  return `&_=${Date.parse(new Date())}`;
}

const request = {
  get(url, data = {}, config = {}) {
    url = url.startsWith('http') ? url : baseUrl + url;
    return new Promise(((resolve, reject) => {
      wx.request({
        url,
        data,
        method: 'GET',
        header: config.header,
        success(res) {
          resolve(res.data);
        },
        fail(e) {
          reject(e);
        },
      });
    }));
  },
  post(url, data = {}, config = {}) {
    url = url.startsWith('http') ? url : baseUrl + url;
    return new Promise(((resolve, reject) => {
      wx.request({
        url,
        data,
        method: 'POST',
        header: config.header,
        success(res) {
          resolve(res.data);
        },
        fail(e) {
          reject(e);
        },
      });
    }));
  },
};

export default request;
