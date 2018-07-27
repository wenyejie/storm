/**
 * 加零
 *
 * author: Storm
 * date: 2017/04/22
 */

export default (num, len = 2) => {

  // 获取当前number长度
  const l = (num + '').length;

  // 如果当前number长度大于目标长度则退出
  if (l >= len) return num;

  let temp = '';
  for (let i = 0; i < len - l; ++i) temp += '0';
  return temp + num;
}
