<!--
 - mask
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <div class="s-mask"
       v-if="visible"
       :class="classes"
       :style="styles"
       @click="handleClick"></div>
</template>

<script>

  export default {
    name: 'sMask',
    props: {

      // 是否显示
      value: {
        type: Boolean,
        default: false
      },

      // 是否绝对定位
      absolute: Boolean,

      // z-index
      zIndex: Number,

      backgroundColor: String
    },
    data () {
      return {

        // 组件可见性
        visible: this.value
      }
    },
    watch: {
      value (val, oldVal) {

        // 数据相同退出方法
        if (val === oldVal || val === this.visible) {
          return false;
        }
        this.visible = val;
      }
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
          'z-index': this.zIndex,
          [`background-color`]: !!this.backgroundColor
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
  @import "../../styles/variable.scss";

  .s-mask {
    position: fixed;
    @include absolute-center;
    background-color: rgba(0, 0, 0, .5);
  }
</style>