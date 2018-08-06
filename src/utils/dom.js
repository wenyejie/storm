/**
 *
 *
 * @author: Storm
 * @date: 2018/08/06
 */

import isElement from './isElement';

/**
 * add class
 * @param target 目标元素
 * @param className 样式名称
 */
export const addClass = (target, className) => {
  if (!isElement(target)) return;
  target.classList.add(className);
};

/**
 * remove class
 * @param target 目标元素
 * @param className 样式名称
 */
export const removeClass = (target, className) => {
  if (!isElement(target)) return;
  target.classList.remove(className);
};

export const on = (target, eventName, callback, options) => {
  if (!isElement(target)) return;
  target.addEventListener(eventName, callback, options)
};