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
        name: 'Row 布局-行',
        path: '/row'
      },
      {
        name: 'Col 布局-列',
        path: '/col'
      },
      {
        name: 'Color 颜色',
        path: '/color'
      },

      {
        name: 'Icon 图标',
        path: '/icon'
      }
    ]
  },
  {
    name: 'Form 表单',
    children: [
      {
        name: 'Button 按钮',
        path: '/button'
      },
      {
        name: 'Checkbox 多选框',
        path: '/checkbox'
      },
      {
        name: 'Radio 单选框',
        path: '/radio'
      },
      {
        name: 'Upload 上传',
        path: '/upload'
      }
    ]
  },
  {
    name: 'Panel 面板',
    path: '/panel'
  }
]