/**
 * dialog
 *
 * @author: Storm
 * @date: 2018/01/20
 */

import Vue from 'vue';

// vm实例
let vmInstance = null;

/**
 * 新建一个实例
 * @param opts 参数
 * @return {Object}
 */
const newInstance = (opts = {}) => {
  const el = document.createElement('s-dialog');
  el.setAttribute('v-model', 'visible');

  // 设置属性
  for (let key in opts) {
    el.setAttribute(key, opts[key]);
  }
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
        console.log(el);
      }
    },
    created () {
      console.log(this);
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
  confirm: (text, opts) => {
    opts = Object.assign({
      name: 'confirm'
    }, opts);

    return initInstance(text, opts);
  }
}

export default resolve => require(['./dialog.vue'], resolve);