/**
 * 判断数据是否为JSON String
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export default (obj) => {
  try {
    return JSON.parse(obj) && true;
  } catch (e) {
    return false;
  }
}