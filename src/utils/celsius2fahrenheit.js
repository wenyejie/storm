/**
 * 摄氏度转华氏度
 *
 * @author: Storm
 * @date: 2018/07/17
 */

export default fahrenheit => {
  if (!Number.isSafeInteger(fahrenheit)) return null;
  return (fahrenheit - 32) * 5 / 9;
}