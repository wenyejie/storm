<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/22
 -->
<template>
    <input :type="type"
           class="s-input"
           @input="handleInput"
           @change="handleChange"
           :placeholder="placeholder"
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

      // 必须的
      required: Boolean,

      // 名称
      name: String,

      // 占位符
      placeholder: String,

      // 禁用
      disabled: Boolean,

      // 只读
      readonly: Boolean
    },
    watch: {

      /**
       * 监听value变化
       * @param val 值
       * @param oldVal 旧值
       * @return {boolean}
       */
      value (val, oldVal) {
        if (val === oldVal) return false;
        this.innerVal = val;
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
      }
    }
  }
</script>

<style lang="scss">
  .s-input {
    position: relative;
    display: inline-block;
    line-height: 1;
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px #bfcbd9 solid;
    transition: border-color .3s ease;

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
  }
</style>