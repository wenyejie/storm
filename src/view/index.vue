<template>
  <div class="index">

    <textarea name="" id="" cols="30" rows="10" @paste="paste" contenteditable="true"></textarea>
    <div style="width: 100px; height: 100px; border: 1px solid #d8d8d8;" @paste="paste" contenteditable="true"></div>

    <img v-for="(item, index) in imgs" :src="item" :key="index">

  </div>

</template>

<script>
  // import lazyimg from '../directives/lazyimg'

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
              !clipboardData.files[i].type.includes('image') // 判断是否为图片
            ) { // 数据错误
              continue
            }
            const fileReader = new FileReader()
            fileReader.onload = ({target}) => {
              this.imgs.push(target.result)
            }
            fileReader.readAsDataURL(clipboardData.files[i])
          }
        }
        event.preventDefault()
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">
</style>
