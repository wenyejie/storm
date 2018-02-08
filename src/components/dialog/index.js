/**
 * dialog
 *
 * @author: Storm
 * @date: 2018/01/20
 */

import Vue from 'vue';
import props2string from '../../utils/props2string';

// vm实例
let vmInstance = null;

let id = 0;

/**
 * 新建一个实例
 * @param opts 参数
 * @return {Object}
 */
const newInstance = (opts = {}) => {
  const props = props2string(opts);
  const el = document.createElement('div');
  el.id = 's-dialog-' + ++id;
  el.innerHTML = `<s-dialog${props} v-model="visible" @ok="handleOk" @cancel="handleCancel"></s-dialog>`;
  document.body.appendChild(el);

  const vm = new Vue({
    el,
    data () {
      return Object.assign({}, {visible: false}, opts)
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
  }

}

const getInstance = (opts) => {
  vmInstance = vmInstance || newInstance(opts)
  return vmInstance
}

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
}

Vue.prototype.$dialog = {

  /**
   * 确定弹出框
   * @param text 内容
   * @param opts 选项
   * @return {*}
   */
  confirm: (text, opts) => {
    opts = Object.assign({
      name: 'confirm'
    }, opts);

    return initInstance(text, opts);
  },

  /**
   * alert弹出框
   * @param text 文本
   * @param opts 选项
   * @return {*}
   */
  alert: (text, opts) => {
    opts = Object.assign({
      name: 'alert',
      hasCancel: false
    }, opts);

    return initInstance(text, opts);
  }
}

export default resolve => require(['./dialog.vue'], resolve);