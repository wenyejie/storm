/**
 * 获取当前月份的展示天数
 *
 * @author: Storm
 * @date: 2018/07/30
 */

const getDay = (value, opts) => Object.assign({value}, {selected: false, disabled: false, other: false}, opts);

export default date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // 本月
  const lastDate = new Date(year, month + 1, 0);
  const lastDay = lastDate.getDate();
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();
  const thisDate = today.getDate();

  // 上个月
  const prevLastDate = new Date(year, month, 0);
  const prevLastDay = prevLastDate.getDate();
  const prevLastWeek = prevLastDate.getDay();

  // 下个月
  const nextLastDate = new Date(year, month + 1, 1);
  const nextLastWeek = nextLastDate.getDay();

  const days = [];

  for (let i = prevLastWeek; i >= 0; i--) days.push(getDay(prevLastDay - i, {other: true, prev: true}))

  for (let i = 1; i <= lastDay; i++) days.push(getDay(i, {
    today: thisYear === year && thisMonth === month && thisDate === i,
    selected: day === i
  }));

  for (let i = nextLastWeek, y = 1; i < 7; i++, y++) days.push(getDay(y, {other: true, next: true}));


  return [[], [], [], [], [], []].map((item, index) => item.concat(days.slice(index * 7, index * 7  + 7)));
}