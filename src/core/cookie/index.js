/**
 *
 *
 * @author: Storm
 * @date: 2018/02/24
 */
import Vue from 'vue';
import isServer from '../../utils/isServer';
import get from './get';
import set from './set';
import has from './has';
import remove from './remove';
import keys from './keys';

const clientCookie = {
  get,
  set,
  has,
  remove,
  keys
}

const serverCookie = (vm) => {
  console.log(vm);
};

const cookie = isServer ? serverCookie : clientCookie;

Vue.prototype.$cookie = cookie;

export default cookie;