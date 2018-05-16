/**
 * 返回cookie值
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encodeURI from '../../utils/encodeURI';
import decodeURI from '../../utils/decodeURI';

export default key => {
  return decodeURI(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURI(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}