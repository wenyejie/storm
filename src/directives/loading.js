/**
 * loading状态
 *
 * @author: Storm
 * @date: 2018/05/28
 */
import isElement from '../utils/isElement'

// class调整
const toggleClass = (el, isLoading) => {
  if (!isElement(el)) return

  el.classList[isLoading ? 'add' : 'remove']('loading')
}

export default {
  name: 'dLoading',
  params: [],
  bind (el, binding, vnode, oldVnode) {
    console.log('bind')
    toggleClass(el, binding.value)
  },

  inserted (el, binding, vnode, oldVnode) {
    console.log('inserted')
  },
  update (el, binding, vnode, oldVnode) {
    console.log('update')
    toggleClass(el, binding.value)
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    console.log('componentUpdated')
  },

  unbind (el, binding, vnode, oldVnode) {
    console.log('unbind')
  }
}