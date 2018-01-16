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
          :disabled="disabled">
    <slot></slot>
  </button>
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
        validator (val) {
          return ['lg', 'sm', 'xs'].includes(val)
        }
      },

      // 是否禁用
      disabled: Boolean,

      // 是否为轮廓线
      outline: Boolean,

      // 加载中
      loading: Boolean,

      // 块
      block: Boolean
    },
    data () {
      return {}
    },
    computed: {

      // class name
      classes () {
        return {
          [`s-button-${this.type}`]: !!this.type,
          [`s-button-${this.size}`]: !!this.size,
          [`s-button-outline`]: !!this.outline,
          [`s-button-block`]: !!this.block
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
  @import "../../styles/variable";
  .s-button {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    background-color: #eee;
    border: 1px solid #ccc;
    color: $default;
    text-align: center;
    padding: 10px 20px;
    font-size: $sm;
    border-radius: 4px;
    transition: all .3s ease-in-out;

    &-block {
      display: block;
      width: 100%;
    }

    &-lg {
      padding: 14px 28px;
      font-size: $lg;
    }

    &-sm {
      padding: 7px 14px;
      font-size: $sm;
    }

    &-xs {
      padding: 3px 6px;
      font-size: $xs;
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:focus,
    &.s-button-outline[disabled]:hover,
    &.s-button-outline[disabled]:focus {
      cursor: not-allowed;
      background-color: $white;
      border-color: #d1dbe5;
      color: #bfcbd9;
    }

    &-default {
      &:focus,
      &:hover {
        background-color: $white;
        border-color: #ddd;
      }
    }

    &-success {
      color: $white;
      background-color: $success;
      border-color: $success;

      &:focus,
      &:hover {
        background: $successLight;
        border-color: $successLight;
      }

      &.s-button-outline:focus,
      &.s-button-outline:hover {
        border-color: $success;
        color: $success;
      }
    }

    &-primary {
      color: $white;
      background-color: $primary;
      border-color: $primary;

      &:focus,
      &:hover {
        background: $primaryLight;
        border-color: $primaryLight;
      }

      &.s-button-outline:focus,
      &.s-button-outline:hover {
        border-color: $primary;
        color: $primary;
      }
    }

    &-warning {
      color: $white;
      background-color: $warning;
      border-color: $warning;

      &:focus,
      &:hover {
        background: $warningLight;
        border-color: $warningLight;
      }

      &.s-button-outline:focus,
      &.s-button-outline:hover {
        border-color: $warning;
        color: $warning;
      }
    }

    &-danger {
      background-color: $danger;
      border-color: $danger;

      &:focus,
      &:hover {
        background: $dangerLight;
        border-color: $dangerLight;
      }

      &.s-button-outline:focus,
      &.s-button-outline:hover {
        border-color: $danger;
        color: $danger;
      }
    }

    &-info {
      color: $white;
      background-color: $info;
      border-color: $info;

      &:focus,
      &:hover {
        background: $infoLight;
        border-color: $infoLight;
      }

      &.s-button-outline:focus,
      &.s-button-outline:hover {
        border-color: $info;
        color: $info;
      }
    }

    &-outline {
      background: $white;
      border: 1px solid #bfcbd9;
      color: $default;

      &:hover {
        background-color: $white;
      }
    }
  }
</style>
