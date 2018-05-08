/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */
import Vue from 'vue';
import get from './get';
import set from './set';
import has from './has';
import remove from './remove';
import keys from './keys';

const cookie = {
  get,
  set,
  has,
  remove,
  keys
}

Vue.prototype.$cookie = cookie;

export default cookie;