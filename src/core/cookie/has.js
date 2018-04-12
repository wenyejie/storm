/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encodeURI from '../../util/encodeURI';

export default (key) => {
  return (new RegExp("(?:^|;\\s*)" + encodeURI(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}