/**
 * 图片压缩
 * @param file 图片文件
 * @param width 最大宽度
 * @param height 最大高度
 * @param type 文件类型
 * @param quality 质量
 * @param fillStyle 画布底色
 *
 * @author: Storm
 * @date: 2017/12/21
 */
export default (file, {width = 1000, height = 1000, type = 'image/jpeg', quality = 0.75, fillStyle = '#ffffff'}) => {
  return new Promise(resolve => {
    const reader = new FileReader()
    const image = new Image()
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    reader.readAsDataURL(file)
    reader.onload = event => {
      image.src = event.target.result
    }
    image.onload = () => {
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight

      // 宽高比例
      const proportion = image.naturalWidth / image.naturalHeight

      // 目的宽度
      let dw = 0

      // 目的高度
      let dh = 0

      // 如果图片高度大于最大高度, 或者图片宽度小于最大宽度
      if (proportion >= 1) {
        dw = image.naturalWidth > width ? width : image.naturalWidth
        dh = dw / proportion
      } else {
        dh = image.naturalHeight > height ? height : image.naturalHeight
        dw = dh * proportion
      }

      // 设置画布底色为透明
      context.fillStyle = fillStyle
      context.fillRect(0, 0, canvas.width, canvas.height)

      // 把图片画到画布上，压缩，剪切等操作
      context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, dw, dh)

      // 转换成blob文件
      canvas.toBlob(blob => {

        // 把blob文件, 转换成图片
        const newFile = new File([blob], `${Date.now()}.jpeg`, {type})
        resolve(newFile)
      }, type, quality)
    }
  })
}
