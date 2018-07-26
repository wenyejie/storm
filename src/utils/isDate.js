/**
 * 判断数据是否为函数
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export default obj => Object.prototype.toString.call(obj) === '[object Date]'