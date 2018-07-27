/**
 *
 *
 * @author: Storm
 * @date: 2017/12/22
 */

export default [
  {
    name: 'Dashboard',
    path: '/'
  },
  {
    name: 'Tools 工具集',
    children: [
      {
        name: '查询Url参数',
        path: '/tools/queryUrlParams'
      },
      {
        name: 'HTML转码',
        path: '/tools/htmlEncode'
      },
      {
        name: 'URI编码解码',
        path: '/tools/uri'
      },
      {
        name: 'Browser浏览器查询',
        path: '/tools/browser'
      },
      {
        name: '网络状态查询',
        path: '/tools/networkStatus'
      },
      {
        name: 'Headers参数',
        path: '/tools/queryHeaders'
      },
      {
        name: 'terminalCommand终端命令',
        path: '/tools/terminalCommand'
      }
    ]
  },
  {
    name: 'Directives 指令',
    children: [
      {
        name: 'loading 加载中',
        path: '/directives/loading'
      }
    ]
  },
  {
    name: 'Basic 基础',
    children: [
      {
        name: 'Row 行',
        path: '/components/row'
      },
      {
        name: 'Col 列',
        path: '/components/col'
      },
      {
        name: 'Color 颜色',
        path: '/components/color'
      },

      {
        name: 'Icon 图标',
        path: '/components/icon'
      }
    ]
  },
  {
    name: 'Form 表单',
    children: [
      {
        name: 'Button 按钮',
        path: '/components/button'
      },
      {
        name: 'Input 输入框',
        path: '/components/input'
      },
      {
        name: 'Textarea 文本域',
        path: '/components/textarea'
      },
      {
        name: 'Select 选择框',
        path: '/components/select'
      },
      {
        name: 'Checkbox 多选框',
        path: '/components/checkbox'
      },
      {
        name: 'Radio 单选框',
        path: '/components/radio'
      },
      {
        name: 'Counter 计数器',
        path: '/components/counter'
      },
      {
        name: 'Switch 开关',
        path: '/components/switch'
      },
      {
        name: 'Upload 上传',
        path: '/components/upload'
      }
    ]
  },
  {
    name: 'Data 数据',
    children: [
      {
        name: 'Table 表格',
        path: '/components/table'
      },
      {
        name: 'Page 分页',
        path: '/components/page'
      }
    ]
  },
  {
    name: 'Others 其它',
    children: [
      {
        name: 'Dialog 对话框',
        path: '/components/dialog'
      },
      {
        name: 'Message 消息提示',
        path: '/components/message'
      },
      {
        name: 'Carousel 轮播',
        path: '/components/carousel'
      },
      {
        name: 'Tab 切换',
        path: '/components/tab'
      },
      {
        name: 'Panel 面板',
        path: '/components/panel'
      }
    ]
  }
]