<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/22
 -->
<template>
  <input :type="type"
         class="s-input"
         :value="innerVal"
         :class="classes"
         @input="handleInput"
         @change="handleChange"
         @keyup="handleKeyup"
         @keydown="handleKeydown"
         @focus="handleFocus"
         @blur="handleBlur"
         :placeholder="placeholder"
         :autocomplete="autocomplete"
         :autofocus="autofocus"
         :autosave="autosave"
         :name="name"
         :title="title"
         :maxlength="maxlength"
         :minlength="minlength"
         :max="max"
         :min="min"
         :required="required"
         :pattern="pattern"
         :disabled="disabled"
         :readonly="readonly">
</template>

<script>
  export default {
    name: 'sInput',
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
          return ['lg', 'sm', 'xs'].includes(val)
        }
      },

      // 标题
      title: String,

      // 最大长度
      maxlength: [Number, String],

      // 最小长度
      minlength: [Number, String],

      // 检验
      pattern: [String, RegExp],

      // 最大值
      max: [String, Number],

      // 最小值
      min: [String, Number],

      // 是否允许自动完成
      autocomplete: String,

      // 是否自动获取焦点
      autofocus: Boolean,

      // 是否自动保存
      autosave: Boolean,

      // 必须的
      required: Boolean,

      // 名称
      name: String,

      // 块元素
      block: Boolean,

      // 占位符
      placeholder: String,

      // 禁用
      disabled: Boolean,

      // 只读
      readonly: Boolean
    },
    computed: {
      classes () {
        return {
          [`s-input-${this.size}`]: !!this.size,
          [`s-input-block`]: !!this.block
        }
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
        if (val === oldVal) return false
        this.innerVal = val
      }
    },
    data () {
      return {

        // 内部值
        innerVal: this.value
      }
    },
    methods: {

      handleInput () {
        this.$emit('input', this.innerVal)
      },

      handleChange () {
        this.$emit('change')
      },

      handleKeyup ($event) {
        this.$emit('keyup', $event)
      },

      handleKeydown ($event) {
        this.$emit('keydown', $event)
      },

      handleFocus () {
        this.$emit('focus')
      },

      handleBlur () {
        this.$emit('blur')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-input {
    position: relative;
    display: inline-block;
    line-height: 1;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px #bfcbd9 solid;
    transition: border-color .3s ease;
    font-size: $md;

    &[type="color"] {
      height: 36px;
    }

    &:focus {
      border-color: #20a0ff;
    }

    &[disabled] {
      background-color: #eef1f6;
      border-color: #d1dbe5;
      color: #bbb;
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