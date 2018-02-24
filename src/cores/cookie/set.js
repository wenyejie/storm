/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import encode from '../../utils/encode';

import {domain, path, secure} from './options';

export default (key, value, opts) => {
  opts = Object.assign({
    path,
    domain,
    secure,

    // 有效期一天
    expires: new Date().setTime(Date.now() + 864e5),
  }, opts);

  // key为空, 或者key为关键字, 退出方法
  if (!key || /^(?:expires|path|domain|secure)$/i.test(key)) {
    return false;
  }

  // 有效期 1year = 31536e6, 1month = 2592e6, 1days = 864e5, 1hour = 36e5, 1min = 6e4;
  if (typeof opts.expires === 'number') {
    if (opts.expires === Infinity) {
      opts.expires = '9999/12/31 23:59:59:999'
    } else if (opts.expires / 1e12 < 1) {
      opts.expires = Date.now() + opts.expires;
    }
  }

  // 如果日期错误
  if (/invalid date/i.test(opts.expires.toString())) {
    opts.expires = new Date().setTime(Date.now() + 864e5);
  }
  opts.expires = new Date(+opts.expires + 288e5);

  document.cookie = ([
    encode(key) + '=' + encode(value),
    opts.expires ? '; expires=' + opts.expires.toUTCString() : '',
    opts.path ? '; path=' + opts.path : '',
    opts.domain ? '; domain=' + opts.domain : '',
    opts.secure ? '; secure' : '',
  ].join(''));
  return true;
}