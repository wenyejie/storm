/**
 * components
 *
 * author: Storm
 * date: 2017/09/20
 */

import sPanel from './panel';
import sIcon from './icon';
import sRow from './row';
import sCol from './col';
import { sRadio, sRadioGroup } from './radio';
import { sCheckbox, sCheckboxGroup } from './checkbox';
import { sButton, sButtonGroup } from './button';
import sHighlight from './highlight';
import sUpload from './upload';
import sInput from './input';
import sTable from './table';
import sSelect from './select';
import sMask from './mask';
import sDialog from './dialog';
import sTextarea from './textarea';
import sMessage from './message';
import { sCarousel, sCarouselItem } from './carousel';
import { sTab, sTabItem } from './tab';
import sPage from './page';
import sCounter from './counter';
import sSwitch from './switch';
import sTimePicker from './timePicker';
import sDatePicker from './datePicker';
import sProgress from './progress';
import sBadge from './badge';
import sRate from './rate';
import {sCollapse, sCollapseItem} from './collapse';

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
  sCarouselItem,
  sTab,
  sTabItem,
  sPage,
  sCounter,
  sSwitch,
  sTimePicker,
  sDatePicker,
  sProgress,
  sBadge,
  sRate,
  sCollapse,
  sCollapseItem
};

const install = Vue => {
  Object.keys(components).forEach(key => Vue.component(key, components[key]));
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default Object.assign(components, { install });
