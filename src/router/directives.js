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
      name: 'rDirectivesLoading',
      component: () => import('../view/directives/loading.vue')
    }
  ]
}