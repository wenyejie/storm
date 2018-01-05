<template>
  <div class="index">

    <textarea name="" id="" cols="30" rows="10" @paste="paste" contenteditable="true"></textarea>
    <div style="width: 100px; height: 100px; border: 1px solid #d8d8d8;" @paste="paste" contenteditable="true"></div>

    <div id="demo"></div>

    <img v-for="(item, index) in imgs" :src="item" :key="index">

  </div>

</template>

<script>
  // import lazyimg from '../directives/lazyimg'

  // 水印图片
  const markImg = 'data:image/png;base64,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';

  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        checkboxDemo: true,

        imgs: []
      }
    },
    methods: {

      /**
       * 生成水印
       */
      addWatermark (result) {
        const img = new Image();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const mark = new Image();
        document.querySelector('#demo').appendChild(img);
        document.querySelector('#demo').appendChild(canvas);
        img.src = result;
        console.log([img]);
        img.onload = () => {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          // 设置画布底色为白色
          context.fillStyle = '#ffffff';
          context.fillRect(0, 0, canvas.width, canvas.height);

          // 把图片画到画布上.
          context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.naturalWidth, img.naturalHeight);

          mark.crossOrigin = 'crossOrigin';
          mark.src = markImg;

          mark.onload = () => {

            let dx, dy = 0, dw, dh;

            // 如果图片宽度大于水印宽度
            if (img.naturalWidth >= mark.naturalWidth) {
              dx = (img.naturalWidth - mark.naturalWidth) / 2;
              dy = img.naturalHeight - mark.naturalHeight;
              dw = mark.naturalWidth;
              dh = mark.naturalHeight;
            } else {
              dw = img.naturalWidth;
              dh = img.naturalWidth / mark.naturalWidth * mark.naturalHeight
              dx = 0;
              dy = img.naturalHeight - dh;
            }

            console.log(0, 0, mark.naturalWidth, mark.naturalHeight, dx, dy, dw, dh);

            context.drawImage(mark, 0, 0, mark.naturalWidth, mark.naturalHeight, dx, dy, dw, dh)
          }
        }
      },

      /**
       * 粘贴数据
       * @param event 剪切板事件
       */
      paste (event) {
        const clipboardData = event.clipboardData
        // 判断是否存在数据, 并且数据是否未数组
        if (!clipboardData) { // 否
          return false
        }

        if (clipboardData.files && clipboardData.files.length) {
          for (let i = 0; i < clipboardData.files.length; i++) {
            console.log('files: ', i, clipboardData.files[i])
            // 判断数据是否正确
            if (
              !clipboardData.files[i] || // 判断剪切板是否有值
              !/image/i.test(clipboardData.files[i].type) // 判断是否为图片
            ) { // 数据错误
              continue
            }
            const fileReader = new FileReader()
            fileReader.onload = ({target}) => {
              this.imgs.push(target.result)
              this.addWatermark(target.result);
            }
            fileReader.readAsDataURL(clipboardData.files[i])
          }
        }
        // event.preventDefault()
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">
</style>
