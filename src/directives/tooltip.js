/**
 * tooltip提示
 *
 * @author: Storm
 * @date: 2018/08/06
 */

const tooltip = {
  bind ($el) {

  }
};

export default {
  name: 'dTooltip',
  params: [],
  bind (el, binding, vnode, oldVnode) {
    console.log('bind', el, binding, vnode, oldVnode);
  },

  inserted (el, binding, vnode, oldVnode) {
    console.log('inserted');
  },
  update (el, binding, vnode, oldVnode) {
    console.log('update');
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    console.log('componentUpdated');
  },

  unbind (el, binding, vnode, oldVnode) {
    console.log('unbind');
  }
};