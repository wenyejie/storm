/**
 * 指令集
 *
 * @author: Storm
 * @date: 2018/05/28
 */

export default {
  path: '/directives',
  name: 'rDirectives',
  component: () => import('../view/directives/index.vue'),
  children: [
    {
      path: 'loading',
      name: 'rLoading',
      component: () => import('../view/directives/loading.vue')
    },
    {
      path: 'tooltip',
      name: 'rTooltip',
      component: () => import('../view/directives/tooltip.vue')
    }
  ]
}