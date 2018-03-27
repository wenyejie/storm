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

    // 查询URL参数
    {
      path: 'queryUrlParams',
      name: 'rQueryUrlParams',
      component: resolve => require(['../view/tools/queryUrlParams.vue'], resolve),
    },

    // html转码
    {
      path: 'htmlEncode',
      name: 'rHtmlEncode',
      component: resolve => require(['../view/tools/htmlEncode.vue'], resolve)
    },

    // uri转码
    {
      path: 'uri',
      name: 'rUri',
      component: resolve => require(['../view/tools/uri.vue'], resolve)
    },

    // 浏览器
    {
      path: 'browser',
      name: 'rBrowser',
      component: resolve => require(['../view/tools/browser.vue'], resolve)
    },

    // 网络状态
    {
      path: 'networkStatus',
      name: 'rNetWorkStatus',
      component: resolve => require(['../view/tools/networkStatus.vue'], resolve)
    }
  ]
}