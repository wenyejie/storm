import cb2cc from '../../utils/cb2cc'

/**
 * css get
 * @param element 元素
 * @param attrName {string|null|undefined} 属性名称
 * @param pseudoElement {string|null} before|after 伪元素
 * @return {object|string}
 * @author: Storm
 * @date: 2018/02/09
 */


export default (element, attrName, pseudoElement = null) => {
  // 参数错误
  if (!element) return '';

  const computedStyle = document.defaultView.getComputedStyle(element, pseudoElement)

  // 判断是否有属性名称
  if (attrName) {
    return computedStyle[cb2cc(attrName)]
  } else {
    return computedStyle
  }
}