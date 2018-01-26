/**
 * author: Storm
 * date: 2017/03/29
 */

/**
 * cc2cb
 * 驼峰命名法转横杠命名法
 * @param str
 */
export default str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
