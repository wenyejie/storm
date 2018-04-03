/**
 * 判断页面是否是可见状态
 * https://caniuse.com/#search=visibilityState
 * https://caniuse.com/#search=visibilitychange
 *
 * @param callback 回调
 * @author: Storm
 * @date: 2018/04/03
 * @return {null}
 */
export default (callback) => {

  const attrName = ['visibilityState', 'webkitVisibilityState'].find(item => `${item}` in document)

  if (!attrName) return null

  const eventName = attrName.replace(/state/i, 'change')

  document.addEventListener(eventName, () => {

    const state = document[attrName]

    if (state === 'visible') {
      callback(true, state)
    } else if (state === 'hidden') {
      callback(false, state)
    }
  })
}