/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encode from '../../utils/encode';
import {domain, path} from './options';
import has from './has'

export default (key, opts) => {
  if (!key || !has(key)) {
    return false;
  }

  opts = Object.assign({
    domain,
    path
  }, opts);

  document.cookie = encode(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (opts.domain ? "; domain=" + opts.domain : "") + (opts.path ? "; path=" + opts.path : "");
  return true;
}