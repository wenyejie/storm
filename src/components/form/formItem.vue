<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/08
 -->
<template>
  <div class="s-form-item" :class="classes">
    <label class="s-form-label" v-if="$slots.label || label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="s-form-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sFormItem',
    props: {
      label: String
    },
    data () {
      return {

        validator: {
          required: null
        }
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
      }
    },
    methods: {

      handleValidate (result) {
        if (!this.isGroup) return;
        this.validator = Object.assign(this.validator, result);
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