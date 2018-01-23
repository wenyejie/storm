/**
 * tool
 *
 * @author: Storm
 * @date: 2018/01/23
 */

export default {
  path: '/tools',
  name: 'rTools',
  component: resolve => require(['../view/tools/tool.vue'], resolve),
  children: [
    {
      path: 'query',
      name: 'rQuery',
      component: resolve => require(['../view/tools/query.vue'], resolve),
    }
  ]
}