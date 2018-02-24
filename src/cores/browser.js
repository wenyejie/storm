/**
 * 浏览器判断
 *
 * @author: Storm
 * @date: 2018/02/08
 */

// 浏览器ua
const ua = navigator.userAgent.toLocaleLowerCase()
const win = window
const vendor = navigator.vendor.toLocaleLowerCase()

// 浏览器对象
const browser = {
  safari: /version.*safari/.test(ua),
  wechat: /micromessenger/.test(ua),
  mac: /mac os x/.test(ua),
  chrome: !!win.chrome || /google/.test(vendor)
};

['android', 'mobile', 'firefox', 'linux', 'windows', 'android', 'iphone', 'ipad', 'ipod', 'msie', 'trident', 'webkit', 'blink', 'gecko', 'edge', 'opera', 'qqbrowser', 'baidu', 'wifi', '4g', '3g'].forEach(key => browser[key] = ua.includes(key))

browser.msie = browser.msie || /rv:11\.0/.test(ua)

export default browser