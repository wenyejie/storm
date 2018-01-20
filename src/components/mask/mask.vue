<!--
 - mask
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <div class="s-mask" :class="classes" :style="styles" @click="handleClick"></div>
</template>

<script>

  export default {
    name: 'sMask',
    props: {

      // 是否绝对定位
      absolute: Boolean,

      // z-index
      zIndex: Number
    },
    computed: {

      /**
       * 样式
       * @return {Object}
       */
      classes () {
        return {
          [`s-mask-absolute`]: !!this.absolute
        }
      },

      /**
       * 样式
       * @return {Object}
       */
      styles () {
        return {
          'z-index': this.zIndex
        }
      }
    },
    methods: {
      handleClick () {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";

  .s-mask {
    position: fixed;
    @include absolute-center;
    background-color: rgba(0, 0, 0, .5);
  }
</style>