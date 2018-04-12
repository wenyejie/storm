/**
 * decode
 * @param string
 *
 * @author: Storm
 * @date: 2018/04/12
 */

export default (string) => {
  return decodeURIComponent(typeof string === 'string' ? string : '')
}