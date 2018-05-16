/**
 * 判断是否为对象
 *
 * @author: Storm
 * @date: 2018/05/08
 */

export default obj => {
  const type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}