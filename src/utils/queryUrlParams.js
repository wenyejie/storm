/**
 * query url params
 *
 * @author: Storm
 * @date: 2018/02/08
 */

export default (search = location.search) => {

  // 判断是否为字符串类型
  if (typeof search !== 'string') {
    search = search.toString()
  }

  const paramsSplit = search.replace(/^[^\?]*\?/i, '').split(/&/)
  const params = {}

  // 数据为空
  if (paramsSplit.length < 1) {
    return params
  }

  let itemSplit;

  if (Array.isArray(paramsSplit)) {
    paramsSplit.forEach(function (item) {
      // 数据为空, 腿出方法
      if (!item) {
        return false
      }
      itemSplit = item.split(/=/)

      // 判断字符串中是否有多个=
      if (itemSplit.length >= 2) { // 是
        const key = itemSplit.splice(0, 1)
        params[key] = itemSplit.join('=')
      }
    })
  }
  return params
}