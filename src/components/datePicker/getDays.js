/**
 * 获取当前月份的展示天数
 *
 * @author: Storm
 * @date: 2018/07/30
 */

const getDay = (value, opts) => Object.assign({value}, {selected: false, disabled: false, active: false, other: false}, opts);

export default (year, month) => {

  // 本月
  const lastDate = new Date(year, month, 0);
  const lastDay = lastDate.getDate();

  // 上个月
  const prevLastDate = new Date(year, month - 1, 0);
  const prevLastDay = prevLastDate.getDate();
  const prevLastWeek = prevLastDate.getDay();

  console.log(`prevLastDay: ${prevLastDay.toLocaleString()}`);

  // 下个月
  const nextLastDate = new Date(year, month, 1);
  const nextLastWeek = nextLastDate.getDay();

  console.log(`nextLastDay: ${nextLastDate.toLocaleString()}`);

  // const totalDay =
  const result = [];

  for (let i = prevLastWeek; i >= 0; i--) result.push(getDay(prevLastDay - i, {other: true, prev: true}))

  for (let i = 1; i <= lastDay; i++) result.push(getDay(i));

  for (let i = nextLastWeek, y = 1; i < 7; i++, y++) result.push(getDay(y, {other: true, next: true}));

  return result;
}