/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import decode from '../../util/decode'

export default () => {
  const keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*!/)
  for (let index = 0; index < keys.length; index++) {
    keys[index] = decode(keys[index])
  }
  return keys
}