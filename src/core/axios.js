/**
 * axios
 *
 * author: Storm
 * date: 2017/09/19
 */

import axios from 'axios'
import { BASE_URL } from './config'

const instance = axios.create({
  baseURL: '//' + BASE_URL,
  withCredentials: true,
  timeout: 10000
  /*
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  */
})

// 请求拦截器
instance.interceptors.request.use(config => {
  if (!config.data) {}config.data = {}
  return config
}, error => Promise.reject(error))

// 响应拦截器
instance.interceptors.response.use(response => {
  response.code = response.data.code
  response.message = response.data.message
  response.body = response.data
  response.data = response.data.data

  return response
}, error => {
  return Promise.reject(error)
})

export default instance
