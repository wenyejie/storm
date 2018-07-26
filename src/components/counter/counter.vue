<!--
 - 计数器
 -
 - @author: Storm
 - @date: 2018/07/26
 -->
<template>
  <div class="s-counter" :class="classes">
    <span class="s-counter-reduce"
          :class="{disabled: reduceDisabled}"
          @click="handleReduce">-</span>
    <s-input class="s-counter-input"
             :disabled="disabled"
             @focus="handleFocus($event)"
             @blur="handleBlur($event)"
             v-model="innerVal"></s-input>
    <span class="s-counter-add"
          :class="{disabled: addDisabled}"
          @click="handleAdd">+</span>
  </div>
</template>

<script>
  import isNumber from "../../utils/isNumber";

  // 判断是否为整数
  const isSafeNumber = val => isNumber(val) && !Number.isNaN(val);

  const numberPropsAttr = {
    type: Number,
    validator: isSafeNumber
  };

  export default {
    name: "sCounter",
    props: {
      value: {
        type: Number,
        validator: isSafeNumber,
        default: 0
      },

      min: numberPropsAttr,

      max: numberPropsAttr,

      step: {
        type: Number,
        validator: isSafeNumber,
        default: 1
      },

      // 禁用
      disabled: Boolean
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return false;
        this.innerVal = val;
      }
    },
    computed: {
      classes () {
        return {
          disabled: !!this.disabled
        };
      },
      reduceDisabled () {
        return this.disabled || isSafeNumber(this.min) && this.min >= this.value;
      },

      addDisabled () {
        return this.disabled || isSafeNumber(this.max) && this.max <= this.value ;
      }
    },
    data () {
      return {
        innerVal: this.value
      };
    },
    methods: {

      /**
       * 减
       */
      handleReduce () {

        if (this.disabled) return;

        // 有设置最小值, 但相减以后小于最小值, 退出方法
        if (isSafeNumber(this.min) && this.innerVal - this.step < this.min) {
          return;
        }

        this.innerVal -= this.step;
        this.handleChange();
      },

      /**
       * 加
       */
      handleAdd () {

        if (this.disabled) return;

        // 有设置最大值, 但相减以后大于最大值, 退出方法
        if (isSafeNumber(this.max) && this.innerVal + this.step > this.max) {
          return;
        }

        this.innerVal += this.step;
        this.handleChange();
      },

      /**
       * 输出
       */
      handleChange () {
        this.$emit("input", this.innerVal);
        this.$emit('change');
      },

      handleFocus ($event) {
        this.$emit("focus", $event);
      },

      handleBlur ($event) {
        this.$emit("blur", $event);
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-counter {
    display: inline-flex;
    border: 1px solid $lightGrey;
    border-radius: 4px;
    transition: border-color .3s ease;
    width: 180px;
    overflow: hidden;

    &:hover {
      border-color: $primary;
    }

    &-reduce,
    &-add {
      width: 35px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
      background-color: #f5f7fa;

      &:hover,
      &::selection {
        color: $primary;
      }

      &.disabled {
        background-color: #eef1f6;
        cursor: not-allowed;
        color: #bbb;
        border-color: #d1dbe5;

        &:hover,
        &::selection {
          color: #bbb;
        }
      }
    }

    input {
      border: none;
      border-radius: 0;
      flex: 1;
      width: 108px;
      text-align: center;
    }

    &-reduce {
      border-right: 1px solid $lightGrey;
    }

    &-add {
      border-left: 1px solid $lightGrey;
    }
  }
</style>