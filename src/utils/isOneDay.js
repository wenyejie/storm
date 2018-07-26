/**
 * 判断两个时间节点是不是在同一天
 *
 * @author: Storm
 * @date: 2018/07/26
 */

export default (day1, day2 = new Date()) => day1.toDateString() === day2.toDateString();