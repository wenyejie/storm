/**
 *
 *
 * @author: Storm
 * @date: 2017/12/22
 */

export default [
  {
    name: 'Dashboard',
    icon: 'time',
    path: '/'
  },
  {
    name: 'Basic',
    icon: 'time',
    children: [
      {
        name: 'Row',
        path: '/row'
      },
      {
        name: 'Col',
        path: '/col'
      },
      {
        name: 'Color',
        path: '/color'
      },

      {
        name: 'Icon',
        path: '/icon'
      }
    ]
  },
  {
    name: 'Form',
    icon: 'time',
    children: [
      {
        name: 'Button',
        path: '/button'
      },
      {
        name: 'Checkbox',
        path: '/checkbox'
      },
      {
        name: 'Radio',
        path: '/radio'
      },
      {
        name: 'Upload',
        path: '/upload'
      }
    ]
  },
  {
    name: 'Panel',
    icon: 'time',
    path: '/panel'
  }
]