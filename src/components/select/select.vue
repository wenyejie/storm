<!--
 - select
 -
 - @author: Storm
 - @date: 2018/01/18
 -->
<template>
  <select class="s-select"
          :class="classes">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'sSelect',
    props: {

      // 大小
      size: {
        type: String,
        validator (val) {
          return ['lg', 'sm', 'xs'].includes(val)
        }
      },

      // 是否为块级元素
      block: Boolean
    },
    data () {
      return {}
    },
    computed: {
      classes () {
        return {
          [`s-select-${this.size}`]: !!this.size,
          [`s-select-block`]: !!this.block
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-select {
    display: inline-block;
    vertical-align: middle;
    line-height: 1.4285714285714286;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px #bfcbd9 solid;
    transition: border-color .3s ease;

    &:not([multiple]) {
      padding-right: 30px;
      -webkit-appearance: none;
      -moze-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 10px center;
      background-size: 10px;
      font-size: $md;
    }

    &-block {
      display: block;
      width: 100%;
    }

    &-lg {
      font-size: $lg;
      padding: 9px 36px 9px 15px;
      background-position: right 12px center;
      background-size: 12px;
    }

    &-sm {
      font-size: $sm;
      padding: 5.5px 24px 5.5px 8px;
      background-position: right 8px center;
      background-size: 8px;
    }

    &-xs {
      font-size: $xs;
      padding: 2.5px 18px 2.5px 6px;
      background-position: right 6px center;
      background-size: 6px;
    }

    &[disabled] {
      background-color: #eef1f6;
      border-color: #d1dbe5;
      color: #bbb;
    }
  }
</style>