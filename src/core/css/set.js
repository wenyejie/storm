/**
 * css set
 * @param element 元素
 * @param attrName 属性名称
 * @param attrValue 属性值
 *
 * @author: Storm
 * @date: 2018/02/09
 */
import cb2cc from '../../utils/cb2cc'

export default (element, attrName, attrValue) => {

  // 判断传参是否正确
  if (!element || !attrName) return

  let styles = {}

  // 判断是否为字符串
  if (typeof attrName === 'string' && attrValue) {
    styles[attrName] = attrValue

  } else if (attrName && typeof attrName === 'object') { // 判断是否为对象, 并且不为空
    styles = attrName
  }

  if (styles) {
    for (let key in attrName) {

      // 判断是否自身属性
      if (attrName.hasOwnProperty(key)) {
        element.style[cb2cc(key)] = attrName[key]
      }
    }
  }
}