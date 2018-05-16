/**
 * 横杠命名法转小驼峰命名法
 *
 * @author: Storm
 * @date: 2018/02/09
 */

export default string => string.replace(/-([A-z])/g, (match, $1) => $1.toLocaleUpperCase());