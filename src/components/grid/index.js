/**
 * grid
 *
 * author: Storm
 * date: 2017/09/20
 */

/*
export const row = () => require('./row.vue')

export const col = () => require('./col.vue')
*/

export const row = resolve => require(['./row.vue'], resolve)

export const col = resolve => require(['./col.vue'], resolve)
