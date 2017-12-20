/**
 * components
 *
 * author: Storm
 * date: 2017/09/20
 */

import sPanel from './panel'
import sIcon from './icon'
import sRow from './row'
import sCol from './col'
import sRadio from './radio'
import sRadioGroup from './radioGroup'
import sCheckbox from './checkbox'
import sCheckboxGroup from './checkboxGroup'
import sButton from './button'

const components = {
  sPanel,
  sIcon,
  sRow,
  sCol,
  sRadio,
  sRadioGroup,
  sCheckbox,
  sCheckboxGroup,
  sButton
}

const install = Vue => {
  Object.keys(components).forEach(key => Vue.component(key, components[key]))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default Object.assign(components, {install})
