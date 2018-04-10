/**
 * 判断数据是否为函数
 *
 * @author: Storm
 * @date: 2018/02/26
 */

export default obj => toString.call(obj) === '[object Function]'