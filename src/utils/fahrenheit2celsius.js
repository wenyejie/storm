/**
 * 华氏度转摄氏度
 *
 * @author: Storm
 * @date: 2018/07/17
 */

export default celsius => {
  if (!Number.isSafeInteger(celsius)) return null;
  return (celsius * 9 / 5) + 32
}