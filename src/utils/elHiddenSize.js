/**
 * 获取隐藏元素属性
 *
 * @author: Storm
 * @date: 2018/08/03
 */

import isElement from './isElement';
const defStyles = {
  visibility: 'hidden',
  position: 'absolute',
  display: 'block'
};
export default ($el) => {
  if (!isElement($el)) return {};
  const oldStyles = {};

  for (let key in defStyles) {
    if (!defStyles.hasOwnProperty(key)) continue;
    oldStyles[key] = $el.style[key];
    $el.style[key] = defStyles[key];
  }

  const result = {
    height: $el.clientHeight,
    width: $el.clientWidth
  };

  for (let key in oldStyles) {
    if (!oldStyles.hasOwnProperty(key)) continue;
    $el.style[key] = oldStyles[key];
  }

  return result;
}