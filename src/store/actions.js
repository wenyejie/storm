/**
 * actions
 *
 * author: Storm
 * date: 2017/09/18
 */

import * as types from './mutation-types'

export const getDemo = ({commit}, demo) => {
  commit(types.DEMO, demo)
}
