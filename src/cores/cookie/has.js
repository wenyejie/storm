/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encode from '../../utils/encode';

export default (key) => {
  return (new RegExp("(?:^|;\\s*)" + encode(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}