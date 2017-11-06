<!--
 - button
 -
 - author: Storm
 - date: 2017/11/06
 -->

<template>
  <button :type="type"
          class="s-button"
          :class="classes"
          @click="handleClick"
          :disabled="disabled"><slot></slot></button>
</template>

<script>
  export default {
    name: 'sButton',
    props: {
      // 原生type属性
      nativeType: {
        type: String,
        default: 'button',
        validator (val) {
          return ['button', 'submit', 'reset'].includes(val)
        }
      },

      // 主题
      type: {
        type: String,
        default: 'default',
        validator (val) {
          return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
        }
      },

      // 大小
      size: {
        type: String,
        default: 'md',
        validator (val) {
          return ['lg', 'md', 'sm', 'xs'].includes(val)
        }
      },

      // 是否禁用
      disabled: Boolean,

      // 是否为轮廓线
      outline: Boolean,

      // 加载中
      loading: Boolean
    },
    data () {
      return {}
    },
    computed: {
      classes () {
        return {
        }
      }
    },
    methods: {
      /**
       * 点击事件
       * @param $event 事件
       */
      handleClick ($event) {
        this.$emit('click', $event)
      }
    }
  }
</script>

<style lang="scss">
  .s-button {
    display: inline-block;

  }
</style>
