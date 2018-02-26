/**
 * components
 *
 * @author: Storm
 * @date: 2018/01/23
 */

export default {
  path: '/components',
  name: 'rComponents',
  component: resolve => require(['../view/components/component.vue'], resolve),
  children: [
    {
      path: 'checkbox',
      name: 'rCheckbox',
      component: resolve => require(['../view/components/checkbox.vue'], resolve)
    },

    {
      path: 'radio',
      name: 'radio',
      component: resolve => require(['../view/components/radio.vue'], resolve)
    },

    {
      path: 'panel',
      name: 'panel',
      component: resolve => require(['../view/components/panel.vue'], resolve)
    },

    {
      path: 'icon',
      name: 'icon',
      component: resolve => require(['../view/components/icon.vue'], resolve)
    },

    {
      path: 'color',
      name: 'color',
      component: resolve => require(['../view/components/color.vue'], resolve)
    },

    {
      path: 'button',
      name: 'button',
      component: resolve => require(['../view/components/button.vue'], resolve)
    },

    {
      path: 'upload',
      name: 'upload',
      component: resolve => require(['../view/components/upload.vue'], resolve)
    },

    {
      path: 'input',
      name: 'input',
      component: resolve => require(['../view/components/input.vue'], resolve)
    },

    {
      path: 'table',
      name: 'table',
      component: resolve => require(['../view/components/table.vue'], resolve)
    },

    {
      path: 'select',
      name: 'select',
      component: resolve => require(['../view/components/select.vue'], resolve)
    },

    {
      path: 'dialog',
      name: 'dialog',
      component: resolve => require(['../view/components/dialog.vue'], resolve)
    },

    {
      path: 'textarea',
      name: 'textarea',
      component: resolve => require(['../view/components/textarea.vue'], resolve)
    },

    {
      path: 'message',
      name: 'message',
      component: resolve => require(['../view/components/message.vue'], resolve)
    },

    {
      path: 'carousel',
      name: 'carousel',
      component: resolve => require(['../view/components/carousel.vue'], resolve)
    }
  ]
}