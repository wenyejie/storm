/**
 * author: Storm
 * date: 2017/03/29
 */

import cc2cb from './cc2cb';

/**
 * 序列化对象
 * @param obj
 * @returns {string}
 */
export default obj => {
  let str = '';
  Object.keys(obj).forEach(key => str += ' :' + cc2cb(key) + '="' + key + '"');
  return str;
}
