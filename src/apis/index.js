/**
 * apis
 *
 * author: Storm
 * date: 2017/10/06
 */

import axios from '../core/axios'

/**
 * 测试接口
 * @return {Promise|*}
 */
export const demo = () => {
  return axios('/demo')
}
