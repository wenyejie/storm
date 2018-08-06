/**
 * tooltip提示
 *
 * @author: Storm
 * @date: 2018/08/06
 */

import Vue from 'vue';
import props2string from '../utils/props2string';

let vmInstance = null;
let id = 0;

const newInstance = (opts) => {
  const props = props2string(opts);
  const el = document.createElement('div');
  el.id = 's-tooltip-' + ++id;
  el.innerHTML = `{{content}}`;
  document.body.appendChild(el);

  const vm = new Vue({
    el,
    data () {
      return Object.assign({}, { visible: false }, opts);
    },
    methods: {

      handleOk () {
        this.ok();
        this.remove();
      },

      handleCancel () {
        this.cancel();
        this.remove();
      },

      /**
       * 移除组件
       */
      remove () {
        setTimeout(this.destroy, 151);
      },

      /**
       * 摧毁组件
       */
      destroy () {
        this.$destroy();
        vmInstance = null;
        document.querySelector(`#${el.id}`).remove();
      },
      ok () {},
      cancel () {}
    }
  });

  return {

    /**
     * 展示组件
     * @param opts 选项
     */
    show (opts) {
      vm.visible = true;
    },

    /**
     * 移除组件
     */
    remove () {
      vm.visible = false;
      vm.remove();
    }
  };
};

const getInstance = (opts) => {
  vmInstance = vmInstance || newInstance(opts);
  return vmInstance;
};

/**
 * 初始化实例
 * @param text 文本
 * @param opts 选项
 * @return {Promise<any>}
 */
const initInstance = (text = '', opts = {}) => {
  opts.body = text;
  return new Promise((resolve, reject) => {
    const vm = getInstance(opts);
    opts.ok = resolve;
    opts.cancel = reject;
    vm.show(opts);
  });
};

const handleShow = () => {

};

const handleHide = () => {

};

export default {
  name: 'dTooltip',
  params: [],
  bind (el, binding, vnode, oldVnode) {
    console.log('bind', el, binding, vnode, oldVnode);
    el.addEventListener('mouseenter', handleShow);
    el.addEventListener('mouseleave', handleHide);
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
    el.removeEventListener('mouseenter', handleShow);
    el.removeEventListener('mouseleave', handleHide);
  }
};