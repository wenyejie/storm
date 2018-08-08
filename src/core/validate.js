/**
 * 表单验证
 *
 * @author: Storm
 * @date: 2018/08/07
 */
import isElement from '../utils/isElement';
export default (el, opts = {}) => {
  if (!isElement(el)) {
    el = document.querySelector(el);
    if (!el) {
      el = document.forms[el];
    }
  }

  if (!el || el.nodeName !== 'FORM') {
    console.error('validate.js表单验证, \'el\'参数错误; el:', el);
    return;
  }

  el.addEventListener('change', () => {

  })
}