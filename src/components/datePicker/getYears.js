/**
 *
 *
 * @author: Storm
 * @date: 2018/08/01
 */

export default date => {
  const year = date.getFullYear();
  const start = year - year % 10;
  const years = [];

  for (let i = 0; i < 12; i++) years.push(start + i);
  return [[], [], []].map((item, index) => item.concat(years.slice(index * 4, index * 4 + 4)));
}