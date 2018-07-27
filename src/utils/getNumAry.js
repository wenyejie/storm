/**
 * 获取数字
 *
 * @author: Storm
 * @date: 2018/07/27
 */
export default (min, max, step = 1) => {
  const result = [];
  for (let i = min; i <= max; i = i + step) result.push(i);
  return result;
}
