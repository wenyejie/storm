/**
 * components
 *
 * @author: Storm
 * @date: 2018/01/23
 */

export default {
  path: '/components',
  name: 'rComponents',
  component: () => import('../view/components/component.vue'),
  children: [
    {
      path: 'checkbox',
      name: 'rCheckbox',
      component: () => import('../view/components/checkbox.vue')
    },

    {
      path: 'radio',
      name: 'radio',
      component: () => import('../view/components/radio.vue')
    },

    {
      path: 'panel',
      name: 'panel',
      component: () => import('../view/components/panel.vue')
    },

    {
      path: 'icon',
      name: 'icon',
      component: () => import('../view/components/icon.vue')
    },

    {
      path: 'color',
      name: 'color',
      component: () => import('../view/components/color.vue')
    },

    {
      path: 'button',
      name: 'button',
      component: () => import('../view/components/button.vue')
    },

    {
      path: 'upload',
      name: 'upload',
      component: () => import('../view/components/upload.vue')
    },

    {
      path: 'input',
      name: 'input',
      component: () => import('../view/components/input.vue')
    },

    {
      path: 'table',
      name: 'table',
      component: () => import('../view/components/table.vue')
    },

    {
      path: 'select',
      name: 'select',
      component: () => import('../view/components/select.vue')
    },

    {
      path: 'dialog',
      name: 'dialog',
      component: () => import('../view/components/dialog.vue')
    },

    {
      path: 'textarea',
      name: 'textarea',
      component: () => import('../view/components/textarea.vue')
    },

    {
      path: 'message',
      name: 'message',
      component: () => import('../view/components/message.vue')
    },

    {
      path: 'carousel',
      name: 'carousel',
      component: () => import('../view/components/carousel.vue')
    },

    {
      path: 'tab',
      name: 'tab',
      component: () => import('../view/components/tab.vue')
    },

    {
      path: 'page',
      name: 'page',
      component: () => import('../view/components/page.vue')
    },

    {
      path: 'row',
      name: 'row',
      component: () => import('../view/components/row.vue')
    },

    {
      path: 'col',
      name: 'col',
      component: () => import('../view/components/col.vue')
    }
  ]
}