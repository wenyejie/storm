/**
 * untils
 *
 * author: Storm
 * date: 2017/09/19
 */

/**
 * 随机返回两个正整数区间的正整数
 * @param max 最大数
 * @param min 最小数
 */
export const random = (max = 10, min = 0) => parseInt(Math.random() * (max - min + 1)) + min

/**
 * 随机乱序数据
 * @param ary 数组
 */
export const chaosAry = ary => {
  const result = []
  while (ary.length > 0) {
    const index = parseInt(Math.random() * (ary.length))
    result.push(ary[index])
    ary.splice(index, 1)
  }
  return result
}

/**
 * 检查浏览器是否支持CSS
 * @param attribute css属性
 * @param value css值
 * @return {Boolean}
 */
export const supportsCSS = (attribute, value) => {
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