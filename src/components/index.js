/**
 * components
 *
 * author: Storm
 * date: 2017/09/20
 */

import sPanel from './panel'
import sIcon from './icon'

const components = {
  sPanel,
  sIcon
}

const install = Vue => {
  Object.keys(components).forEach(key => Vue.component(key, components[key]))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default Object.assign(components, {install})
