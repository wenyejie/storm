/**
 * 错误日志上报
 *
 * author: Storm
 * date: 2017/09/19
 */

/**
 * 上报js错误信息
 * @param message
 * @param source
 * @param lineno
 * @param colno
 * @param error
 * 参考: https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror
 */
const reportError = (message, source, lineno, colno, error) => {
  message = message.toLocaleLowerCase()

  console.log(message, source, lineno, colno, error)

  // 过滤其它源的js错误
  if (message.includes('script error')) return false
}

if (typeof window !== 'undefined') window.onerror = reportError

export default reportError
