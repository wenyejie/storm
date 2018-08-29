/**
 * axios
 *
 * author: Storm
 * date: 2017/09/19
 */

import axios from 'axios';
import { BASE_URL } from './config';

const instance = axios.create({
  baseURL: '//' + BASE_URL,
  withCredentials: true,
  timeout: 10000
  /*
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  */
});

// 请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, error => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use(response => {
  response.code = response.data.code;
  response.message = response.data.message;
  response.body = response.data;
  response.data = response.data.data;

  return response;
}, error => {
  return Promise.reject(error);
});

/**
 * ajax请求封装
 *
 * @param url 请求地址
 * @param params 请求参数
 * @param opts 选项
 * @return {Promise|*}
 */
const request = (url, params = {}, opts = {}) => {
  opts = Object.assign({ method: 'post' }, opts);
  return axios[opts.method](url, params, opts)
    .then(response => {
      if (response.code !== '000') return Promise.reject(response);
      return response.data;
    }, (error) => {
      console.error(error);
      return Promise.reject(error);
    });
};

if (typeof window !== 'undefined') window.request = request;

export default request;
