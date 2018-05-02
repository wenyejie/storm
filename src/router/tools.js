/**
 * tool
 *
 * @author: Storm
 * @date: 2018/01/23
 */

export default {
  path: '/tools',
  name: 'rTools',
  component: () => import('../view/tools/tool.vue'),
  children: [

    // 查询URL参数
    {
      path: 'queryUrlParams',
      name: 'rQueryUrlParams',
      component: () => import('../view/tools/queryUrlParams.vue')
    },

    // html转码
    {
      path: 'htmlEncode',
      name: 'rHtmlEncode',
      component: () => import('../view/tools/htmlEncode.vue')
    },

    // uri转码
    {
      path: 'uri',
      name: 'rUri',
      component: () => import('../view/tools/uri.vue')
    },

    // 浏览器
    {
      path: 'browser',
      name: 'rBrowser',
      component: () => import('../view/tools/browser.vue')
    },

    // 网络状态
    {
      path: 'networkStatus',
      name: 'rNetWorkStatus',
      component: () => import('../view/tools/networkStatus.vue')
    },

    // headers属性
    {
      path: 'queryHeaders',
      name: 'rQueryHeaders',
      component: () => import('../view/tools/queryHeaders.vue')
    },

    // 终端命令
    {
      path: 'terminalCommand',
      name: 'rTerminalCommand',
      component: () => import('../view/tools/terminalCommand.vue')
    }
  ]
}