/**
 * 判断数据是否为字符串类型
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export default obj => toString.call(obj) === '[object String]';