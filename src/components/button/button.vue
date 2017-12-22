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
          [`outline`]: !!this.outline,
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
    color: #1f2d3d;
    text-align: center;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
    transition: all .3s ease-in-out;

    &-block {
      display: block;
      width: 100%;
    }

    &.outline {
      background: #fff;
      border: 1px solid #bfcbd9;
      color: #1f2d3d;

      &:hover {
        background-color: #fff;
      }
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:focus,
    &.outline[disabled]:hover,
    &.outline[disabled]:focus {
      cursor: not-allowed;
      background-color: #fff;
      border-color: #d1dbe5;
      color: #bfcbd9;
    }

    &-default {
      &:focus,
      &:hover {
        background-color: #fff;
        border-color: #ddd;
      }
    }

    &-success {
      color: #fff;
      background-color: $success;
      border-color: $success;

      &:focus,
      &:hover {
        background: #42d885;
        border-color: #42d885;
      }

      &.outline:focus,
      &.outline:hover {
        border-color: $success;
        color: $success;
      }
    }

    &-primary {
      color: #fff;
      background-color: $primary;
      border-color: $primary;

      &:focus,
      &:hover {
        background: #4db3ff;
        border-color: #4db3ff;
      }

      &.outline:focus,
      &.outline:hover {
        border-color: $primary;
        color: $primary;
      }
    }

    &-warning {
      color: #fff;
      background-color: $warning;
      border-color: $warning;

      &:focus,
      &:hover {
        background: #f9c855;
        border-color: #f9c855;
      }

      &.outline:focus,
      &.outline:hover {
        border-color: $warning;
        color: $warning;
      }
    }

    &-danger {
      background-color: $danger;
      border-color: $danger;

      &:focus,
      &:hover {
        background: #ff6d6d;
        border-color: #ff6d6d;
      }

      &.outline.focus,
      &.outline:hover {
        border-color: $danger;
        color: $danger;
      }
    }

    &-info {
      color: #fff;
      background-color: $info;
      border-color: $info;

      &:focus,
      &:hover {
        background: #73ccff;
        border-color: #73ccff;
      }

      &.outline:focus,
      &.outline:hover {
        border-color: $info;
        color: $info;
      }
    }
  }
</style>
