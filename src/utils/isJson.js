/**
 * 判断数据是否为JSON类型
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export default (obj) => {
  try {
    return JSON.stringify(obj) && true;
  } catch (e) {
    return false;
  }
}