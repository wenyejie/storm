/**
 * 是正确的日期数据
 *
 * @author: Storm
 * @date: 2018/08/29
 */

import isDate from './isDate'

export default (obj) => isDate(obj) && obj.toString() !== 'Invalid Date'
