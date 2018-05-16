/**
 * 判断是否支持CSS
 *
 * @author: Storm
 * @date: 2018/05/08
 */

export default (attribute, value) => {
  if (window.CSS && window.CSS.supportsCSS) {
    if (typeof value === 'undefined') return window.CSS.supportsCSS(attribute)
    return window.CSS.supportsCSS(attribute, value)
  }

  const elem = document.createElement('div')
  if (attribute in elem.style) {
    elem.style[attribute] = value
    return elem.style[attribute] === value
  }
  return false
}