/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import decodeURI from '../../utils/decodeURI'

export default () => {
  const keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*!/)
  for (let index = 0; index < keys.length; index++) {
    keys[index] = decodeURI(keys[index])
  }
  return keys
}