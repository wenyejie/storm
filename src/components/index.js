/**
 * components
 *
 * author: Storm
 * date: 2017/09/20
 */

import { row, col } from './grid'
import { checkbox } from './checkbox'

const components = {
  sRow: row,
  sCol: col,
  sCheckbox: checkbox
}

const install = Vue => {
  Object.keys(components).forEach(key => Vue.component(key, components[key]))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default Object.assign(components, {install})
