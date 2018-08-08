<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/08
 -->
<template>
  <div class="s-form-item" :class="classes">
    <label class="s-form-label" v-if="$slots.label || label" :style="labelStyles">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="s-form-content" :style="contentStyles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import isNumber from '../../utils/isNumber';

  export default {
    name: 'sFormItem',
    props: {
      label: String,

      // 表单标签宽度
      labelWidth: [Number, String]
    },
    data () {
      return {

        validator: {}
      };
    },
    computed: {

      // 判断是否为group
      isGroup () {
        return this.$parent.$options.name === 'sForm';
      },
      classes () {
        return {
          's-form-required': this.validator.required
        };
      },

      labelStyles () {
        const result = {};
        if (this.isGroup) {
          const width = this.labelWidth ? this.labelWidth : this.$parent.labelWidth;

          if (width) result.width = `${width}` + isNumber(width) ? 'px' : '';
        }
        return result;
      },

      contentStyles () {
        const result = {};
        if (this.isGroup) {
          const width = this.labelWidth ? this.labelWidth : this.$parent.labelWidth;
          if (width) result.width = `-${width}` + isNumber(width) ? 'px' : '';
        }
        return result;
      }
    },
    methods: {

      handleValidate (result) {
        if (!this.isGroup) return;
        for (let key in result) {
          if (!result.hasOwnProperty(key)) continue;
          this.$set(this.validator, key, result[key]);
        }
        this.$parent.handleValidate(result, 1);
      }
    },
    created () {
    }
  };
</script>

<style lang="scss">
  .s-form {
    &-item {
      margin-bottom: 15px;
    }

    &-required .s-form-label:before {
      content: "*";
      color: #f56c6c;
      margin-right: 4px;
    }

  }
</style>