/**
 * 浏览器判断
 *
 * @author: Storm
 * @date: 2018/02/08
 */

import isClient from '../util/isClient';
let browser = {}

if (isClient) {

// 浏览器ua
  const ua = navigator.userAgent.toLocaleLowerCase()
  const win = window
  const vendor = navigator.vendor.toLocaleLowerCase()

  /**
   * 从ua中获取(系统|内核|浏览器)版本
   * @param name
   * @return {string}
   */
  const version = name => {
    const reg = new RegExp(`${name}[\\s+|/]([\\d+\\.]+)`)
    return reg.test(ua) ? RegExp.$1 : ''
  }

// 浏览器对象
  browser = {
    safari: /version.*safari/.test(ua),
    wechat: /micromessenger/.test(ua),
    mac: /mac os x/.test(ua),
    chrome: !!win.chrome || /google/.test(vendor),
    version,
    ua,
    vendor
  };

  ['android', 'mobile', 'firefox', 'linux', 'windows', 'android', 'iphone', 'ipad', 'ipod', 'msie', 'trident', 'webkit', 'blink', 'gecko', 'edge', 'opera', 'qqbrowser', 'baidu', 'wifi', '4g', '3g', 'ubuntu'].forEach(key => browser[key] = ua.includes(key))

  browser.ios = browser.iphone || browser.ipad || browser.ipod

  browser.msie = browser.msie || /rv:11\.0/.test(ua)

}

export default browser