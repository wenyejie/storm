<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/22
 -->
<template>
  <input :type="type"
         ref="input"
         class="s-input"
         :name="name"
         :title="title"
         v-model="innerVal"
         :class="classes"
         :required="required"
         :minlength="minlength"
         :maxlength="maxlength"
         @input="handleInput($event)"
         @change="handleChange($event)"
         @keyup="handleKeyup($event)"
         @keydown="handleKeydown($event)"
         @focus="handleFocus($event)"
         @blur="handleBlur($event)">
</template>

<script>
  import isUndefined from '../../utils/isUndefined';
  import validateMixins from '../../mixins/validateMixins'

  export default {
    name: 'sInput',
    mixins: [validateMixins],
    props: {

      // 值
      value: {},

      // 类型
      type: {
        type: String,
        default: 'text'
      },

      // 大小
      size: {
        type: String,
        validator (val) {
          return ['lg', 'sm', 'xs'].includes(val);
        }
      },

      // 块元素
      block: Boolean
    },
    computed: {
      classes () {
        return {
          [`s-input-${this.size}`]: !!this.size,
          [`s-input-block`]: !!this.block
        };
      }
    },
    watch: {

      /**
       * 监听value变化
       * @param val 值
       * @param oldVal 旧值
       * @return {boolean}
       */
      value (val, oldVal) {
        if (val === oldVal || val === this.innerVal) return false;
        this.innerVal = val;
        this.handleValidate();
      }
    },
    data () {
      return {

        // 内部值
        innerVal: this.value
      };
    },
    methods: {

      handleEmit (...args) {
        if (!this.isGroup) return;
        args.forEach(item => {
          if (!isUndefined(item)) this.$parent.validator[item] = this[item];
        });
      },

      handleInput () {
        this.$emit('input', this.innerVal);
      },

      handleChange ($event) {
        this.$emit('change', $event);
        this.handleValidate();
      },

      handleKeyup ($event) {
        this.$emit('keyup', $event);
      },

      handleKeydown ($event) {
        this.$emit('keydown', $event);
      },

      handleFocus ($event) {
        this.$emit('focus', $event);
      },

      handleBlur ($event) {
        this.$emit('blur', $event);
      }
    },
    created () {
      this.handleEmit('required');
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-input {
    position: relative;
    display: inline-block;
    line-height: 1;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px $lightGrey solid;
    transition: border-color .3s ease;
    font-size: $md;

    &[type="color"] {
      height: 36px;
    }

    &:focus {
      border-color: $primary;
    }

    &:disabled {
      background-color: #eef1f6;
      border-color: #d1dbe5;
      color: #bbb;
    }

    &[readonly] {
      cursor: default;

      &:focus {
        border-color: $lightGrey;
      }
    }

    &-block {
      display: block;
      width: 100%;
    }

    &-lg {
      font-size: $lg;
      padding: 8.5px 10px;
    }

    &-sm {
      font-size: $sm;
      padding: 4.5px 7px;
    }

    &-xs {
      font-size: $xs;
      padding: 0.5px 3px;
    }
  }
</style>