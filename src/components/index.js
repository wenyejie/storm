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
import sButtonGroup from './buttonGroup'
import sHighlight from './highlight'
import sUpload from './upload'
import sInput from './input'
import sTable from './table'
import sSelect from './select'
import sMask from './mask'
import sDialog from './dialog'
import sTextarea from './textarea'
import sMessage from './message';
import {sCarousel, sCarouselItem} from './carousel';

const components = {
  sPanel,
  sIcon,
  sRow,
  sCol,
  sRadio,
  sRadioGroup,
  sCheckbox,
  sCheckboxGroup,
  sButton,
  sButtonGroup,
  sHighlight,
  sUpload,
  sInput,
  sTable,
  sSelect,
  sMask,
  sDialog,
  sTextarea,
  sMessage,
  sCarousel,
  sCarouselItem
}

const install = Vue => {
  Object.keys(components).forEach(key => Vue.component(key, components[key]))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default Object.assign(components, {install})
