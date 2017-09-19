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
 */
const reportError = (message, source, lineno, colno, error) => {
  console.log(message, source, lineno, colno, error)
}

if (typeof window !== 'undefined') window.onerror = reportError

export default reportError
