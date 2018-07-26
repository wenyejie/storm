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
    name: "sSelect",
    props: {

      value: {},

      // 大小
      size: {
        type: String,
        validator (val) {
          return ["lg", "sm", "xs"].includes(val);
        }
      },

      // 是否为块级元素
      block: Boolean
    },
    data () {
      return {
        innerVal: this.value
      };
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return;
        this.innerVal = val;
      }
    },
    computed: {
      classes () {
        return {
          [`s-select-${this.size}`]: !!this.size,
          [`s-select-block`]: !!this.block
        };
      }
    },
    methods: {
      handleChange () {
        this.$emit("input", this.innerVal);
        this.$emit("change", this.innerVal);
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-select {
    display: inline-block;
    vertical-align: middle;
    line-height: 1.4285714285714286;
    padding: 6px 24px 6px 12px;
    border-radius: 4px;
    border: 1px $lightGrey solid;
    transition: border-color .3s ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 6px center;
    background-size: 10px;

    &[disabled] {
      border-color: #d1dbe5;
      color: #bbb;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='rgb(187,187,187)' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E");
    }

    &-block {
      display: block;
      width: 100%;
    }

    &-lg {
      font-size: $lg;
      padding: 8px 26px 8px 16px;
      background-position: right 6px center;
      background-size: 12px;
    }

    &-sm {
      font-size: $sm;
      padding: 4.5px 16px 4.5px 9px;
      background-position: right 4px center;
      background-size: 8px;
    }

    &-xs {
      font-size: $xs;
      padding: 1.5px 12px 1.5px 3px;
      background-position: right 3px center;
      background-size: 6px;
    }

    &[multiple] {
      padding-right: 10px;
      background-image: none;
    }
  }
</style>