/**
 * store
 *
 * author: Storm
 * date: 2017/09/18
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// import * as mutations from './mutation-types';
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const createStore = () => {
  return new Vuex.Store({
    state: {
      demo: []
    },
    actions,
    getters,
    modules: {
    },
    strict: debug
  })
}
