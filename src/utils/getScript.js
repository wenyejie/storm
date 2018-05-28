/**
 * 载入script
 *
 * author: Storm
 * date: 2017/11/04
 */

/**
 * 获取js
 * @param src 地址
 * @param attrs 额外属性
 * @param parent 父元素
 * @returns Promise
 */
export default (src, attrs = {}, parent = document.body || document.head) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src

    // 设置属性
    for (let key in attrs) {

      // 判断属性是不是对象的属性
      if (!attrs.hasOwnProperty(key)) continue

      // 设置属性
      script.setAttribute(key, attrs[key])
    }

    // 载入script
    parent.appendChild(script)

    script.onload = () => {
      resolve(script)
    }

    script.onerror = () => {
      reject(script)
    }

  })

}
