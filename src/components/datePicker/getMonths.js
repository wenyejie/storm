/**
 * 获取月份
 *
 * @author: Storm
 * @date: 2018/07/31
 */

const getMonth = (value, opts) => Object.assign({ value }, { selected: false }, opts);

export default date => {

  const month = date.getMonth();

  const months = [];

  for (let i = 0; i < 12; i++) months.push(getMonth(i, { selected: month === i }));

  return [[], [], []].map((item, index) => item.concat(months.slice(index * 4, index * 4 + 4)));
}