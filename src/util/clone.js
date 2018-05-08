import isObject from './isObject';

/**
 * 数据克隆
 * @param obj 对象
 * @author: Storm
 * @date: 2018/05/08
 */

export default obj => {
  if (!isObject(obj)) return obj;
  return Array.isArray(obj) ? obj.slice() : Object.assign({}, obj);
}