/**
 * 返回cookie值
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encode from '../../utils/encode';
import decode from '../../utils/decode';

export default key => {
  return decode(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encode(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}