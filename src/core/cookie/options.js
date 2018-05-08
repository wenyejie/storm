/**
 * cookie 默认配置选项
 *
 * @author: Storm
 * @date: 2018/02/24
 */

import isServer from '../../util/isServer'

// 默认域名
export const domain = isServer ? '' : location.hostname.replace(/^(\w|\d)+\./, '');

// 默认路径
export const path = '/';

// 默认安全
export const secure = false;