/**
 * 随机数
 *
 * @author: Storm
 * @date: 2018/02/27
 */

export default (max, min = 0) => min + Math.floor(Math.random() * (max - min + 1));