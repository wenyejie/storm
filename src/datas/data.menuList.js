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
      }
    ]
  },
  {
    name: 'Panel 面板',
    path: '/components/panel'
  }
]