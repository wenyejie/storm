/**
 * 判断页面是否是可见状态
 * https://caniuse.com/#search=visibilityState
 * https://caniuse.com/#search=visibilitychange
 * @author: Storm
 * @date: 2018/04/03
 */

/**
 * 判断页面是否是可见状态
 * https://caniuse.com/#search=visibilityState
 * https://caniuse.com/#search=visibilitychange
 *
 * @author: Storm
 * @date: 2018/04/03
 */

// 属性名称
const attrName = ['visibilityState', 'webkitVisibilityState'].find(item => `${item}` in document)

// 事件名称
const eventName = attrName.replace(/state/i, 'change')

export default (callback) => {

  if (!attrName) return null

  document.addEventListener(eventName, () => {

    const state = document[attrName]

    if (state === 'visible') {
      callback(true, state)
    } else if (state === 'hidden') {
      callback(false, state)
    }
  })
}