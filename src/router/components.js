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
      name: 'rRadio',
      component: () => import('../view/components/radio.vue')
    },

    {
      path: 'panel',
      name: 'rPanel',
      component: () => import('../view/components/panel.vue')
    },

    {
      path: 'icon',
      name: 'rIcon',
      component: () => import('../view/components/icon.vue')
    },

    {
      path: 'color',
      name: 'rColor',
      component: () => import('../view/components/color.vue')
    },

    {
      path: 'button',
      name: 'rButton',
      component: () => import('../view/components/button.vue')
    },

    {
      path: 'upload',
      name: 'rUpload',
      component: () => import('../view/components/upload.vue')
    },

    {
      path: 'input',
      name: 'rInput',
      component: () => import('../view/components/input.vue')
    },

    {
      path: 'table',
      name: 'rTable',
      component: () => import('../view/components/table.vue')
    },

    {
      path: 'select',
      name: 'rSelect',
      component: () => import('../view/components/select.vue')
    },

    {
      path: 'dialog',
      name: 'rDialog',
      component: () => import('../view/components/dialog.vue')
    },

    {
      path: 'textarea',
      name: 'rTextarea',
      component: () => import('../view/components/textarea.vue')
    },

    {
      path: 'message',
      name: 'rMessage',
      component: () => import('../view/components/message.vue')
    },

    {
      path: 'carousel',
      name: 'rCarousel',
      component: () => import('../view/components/carousel.vue')
    },

    {
      path: 'tab',
      name: 'rTab',
      component: () => import('../view/components/tab.vue')
    },

    {
      path: 'page',
      name: 'rPage',
      component: () => import('../view/components/page.vue')
    },

    {
      path: 'row',
      name: 'rRow',
      component: () => import('../view/components/row.vue')
    },

    {
      path: 'col',
      name: 'rCol',
      component: () => import('../view/components/col.vue')
    },

    {
      path: 'counter',
      name: 'rCounter',
      component: () => import('../view/components/counter.vue')
    },

    {
      path: 'switch',
      name: 'rSwitch',
      component: () => import('../view/components/switch.vue')
    },

    {
      path: 'timePicker',
      name: 'rTimePicker',
      component: () => import('../view/components/timePicker.vue')
    },

    {
      path: 'datePicker',
      name: 'rDatePicker',
      component: () => import('../view/components/datePicker.vue')
    },

    {
      path: 'progress',
      name: 'rProgress',
      component: () => import('../view/components/progress.vue')
    },

    {
      path: 'badge',
      name: 'rBadge',
      component: () => import('../view/components/badge.vue')
    },

    {
      path: 'rate',
      name: 'rRate',
      component: () => import('../view/components/rate.vue')
    },

    {
      path: 'collapse',
      name: 'rCollapse',
      component: () => import('../view/components/collapse.vue')
    }
  ]
}