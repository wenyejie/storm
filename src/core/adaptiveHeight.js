/**
 * 自适应高度
 *
 * @author: Storm
 * @date: 2018/02/09
 */

import css from './css';

// 复制元素
let  copyElement;

// 默认样式
const DEFAULT_STYLES = `height:0 !important;
visibility:hidden !important;
overflow:hidden !important;
position:absolute !important;
z-index:-1000 !important;
top:0 !important;
right:0 !important;
`;

// 需要的样式
const CONTEXT_STYLES = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'border-width',
  'box-sizing'
];


function collectNodeStyles (element) {
  const styles = css.get(element);
  
}

export default (element, opts) => {
  // 参数错误
  if (!element) return;

  if (!copyElement) {
    copyElement = document.createElement('textarea');
  }

  // 获取循环的值, 赋予复制元素上
  const contextStyles = CONTEXT_STYLES.map(key => `${key}:${css.get(element, key)}`).join(';');

  copyElement.setAttribute('style', contextStyles + DEFAULT_STYLES);

  copyElement.value = element.value;

  document.body.appendChild(copyElement);

  const result = copyElement.scrollHeight + 'px';

  console.log([copyElement], result);

  return result;

}