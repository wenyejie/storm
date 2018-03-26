<!--
 - select
 -
 - @author: Storm
 - @date: 2018/01/18
 -->
<template>
  <select class="s-select"
          @change="handleChange"
          v-model="innerVal"
          :class="classes">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'sSelect',
    props: {

      value: {},

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
      return {
        innerVal: this.value
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return
        this.innerVal = val
      }
    },
    computed: {
      classes () {
        return {
          [`s-select-${this.size}`]: !!this.size,
          [`s-select-block`]: !!this.block
        }
      }
    },
    methods: {
      handleChange () {
        this.$emit('input', this.innerVal)
        this.$emit('change', this.innerVal)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-select {
    display: inline-block;
    vertical-align: middle;
    line-height: 1.4285714285714286;
    padding: 7px 30px 7px 10px;
    border-radius: 4px;
    border: 1px $lightGrey solid;
    transition: border-color .3s ease;
    appearance: none;
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 10px center;
    background-size: 10px;

    &-block {
      display: block;
      width: 100%;
    }

    &-lg {
      font-size: $lg;
      padding: 12px 36px 12px 15px;
      background-position: right 12px center;
      background-size: 12px;
    }

    &-sm {
      font-size: $sm;
      padding: 4.5px 24px 4.5px 8px;
      background-position: right 8px center;
      background-size: 8px;
    }

    &-xs {
      font-size: $xs;
      padding: .5px 12px .5px 3px;
      background-position: right 3px center;
      background-size: 6px;
    }

    &[disabled] {
      border-color: #d1dbe5;
      color: #bbb;
      background: #eef1f6 url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='rgb(187,187,187)' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 10px center;
      background-size: 10px;
    }

    &[multiple] {
      padding-right: 10px;
      background-image: none;
    }
  }
</style>