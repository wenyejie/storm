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
          @click="handleClick">
    <s-icon v-if="loading" type="loading"></s-icon>
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
          [`s-button-block`]: !!this.block,
          [`s-button-loading`]: !!this.loading
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
  @import "../../styles/variable.scss";

  @keyframes rotating {
    0% {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(1turn)
    }
  }

  .s-button {
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    background-color: #eee;
    border: 1px solid #ccc;
    color: $default;
    text-align: center;
    padding: 5.5px 11px;
    font-size: $md;
    border-radius: 4px;
    transition: all .3s ease-in-out;

    &-block {
      display: block;
      width: 100%;
    }

    &-loading {
      position: relative;

      .s-icon-loading {
        font-size: 16px;
        vertical-align: middle;
        display: inline-flex;
        animation: rotating 1s linear infinite
      }

      &:after {
        pointer-events: none;
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, .35);
      }
    }

    &-lg {
      padding: 7px 14px;
      font-size: $lg;
    }

    &-sm {
      padding: 4px 8px;
      font-size: $sm;
    }

    &-xs {
      padding: 1px 2px;
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
      color: $lightGrey;
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
      color: $white;

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
      border: 1px solid $lightGrey;
      color: $default;

      &:hover {
        background-color: $white;
      }
    }
  }
</style>
