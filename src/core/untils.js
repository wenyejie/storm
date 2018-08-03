/**
 * untils
 *
 * author: Storm
 * date: 2017/09/19
 */

/**
 * 随机乱序数据
 * @param ary 数组
 */
export const chaosAry = ary => {
  const result = [];
  while (ary.length > 0) {
    const index = parseInt(Math.random() * (ary.length));
    result.push(ary[index]);
    ary.splice(index, 1);
  }
  return result;
};
