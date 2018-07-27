/**
 * body overflow
 *
 * @author: Storm
 * @date: 2018/07/27
 */

export default (isToggle, $el = document.body) => {
  let command = 'toggle';
  if (isToggle === true) {
    command = 'add';
  } else if (isToggle === false) {
    command = 'remove'
  }

  $el.classList[command]('overflow-hidden');
}