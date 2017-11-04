/**
 * 懒加载图片
 *
 * author: Storm
 * date: 2017/10/19
 */

const DEFAULT_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

class Lazyimg {

  constructor ({el, error, loading, throttleWait, listener, eventType}) {
    this.el = el
    this.options = {
      error: error || DEFAULT_URL,
      loading: loading || DEFAULT_URL,
      throttleWait: throttleWait || 200,
      listener: listener || window,
      eventType: eventType || 'scroll'
    }
    this.imgArray = []
  }

  addListener () {
    this.options.listener.addEventListener('scroll', this.eventFn)
  }

  pushImg (el, binding, vnode) {
    this.imgArray.push({el, binding, vnode})
    if (this.imgArray.length <= 1) this.addListener()
  }

  eventFn ($event) {
    console.log($event)
  }
}

let lazyimg = new Lazyimg({})

export default {
  name: 'lazyimg',
  bind: (el, binding, vnode) => {
    lazyimg.pushImg(el, binding, vnode)
  }
}
