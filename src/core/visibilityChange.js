/**
 * 判断页面是否是可见状态
 * https://caniuse.com/#search=visibilityState
 * https://caniuse.com/#search=visibilitychange
 * @author: Storm
 * @date: 2018/04/03
 */

// 属性名称
const attrName = ['visibilityState', 'webkitVisibilityState'].find(item => `${item}` in document)

// 事件名称
const eventName = attrName.replace(/state/i, 'change')

// 事件回调
let eventCb = null

const eventFn = () => {
  const state = document[attrName]

  if (state === 'visible') {
    eventCb(true, state)
  } else if (state === 'hidden') {
    eventCb(false, state)
  }
}

export default {

  add (callback) {
    if (callback) {
      eventCb = callback
      document.addEventListener(eventName, eventFn)
    }
  },

  remove () {
    if (eventCb) {
      document.removeEventListener(eventName, eventFn)
    }
  }
}