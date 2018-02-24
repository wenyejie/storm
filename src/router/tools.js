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
      path: 'queryUrlParams',
      name: 'rQueryUrlParams',
      component: resolve => require(['../view/tools/queryUrlParams.vue'], resolve),
    },
    {
      path: 'htmlEncode',
      name: 'rHtmlEncode',
      component: resolve => require(['../view/tools/htmlEncode.vue'], resolve)
    },
    {
      path: 'uri',
      name: 'rUri',
      component: resolve => require(['../view/tools/uri.vue'], resolve)
    },
    {
      path: 'browser',
      name: 'browser',
      component: resolve => require(['../view/tools/browser.vue'], resolve)
    }
  ]
}