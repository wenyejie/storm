<!--
 - 
 -
 - @author: Storm
 - @date: 2018/08/08
 -->
<template>
  <form novalidate
        @submit="handleSubmit($event)"
        :class="classes"
        class="s-form"
        :name="name">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'sForm',
    props: {

      // form name
      name: String,
      block: {
        type: Boolean,
        default: true
      },

      // 验证结果
      value: Object,

      // 表单标签宽度
      labelWidth: [Number, String]
    },
    data () {
      return {
        innerVal: this.value
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal || this.value === val) return;
        this.innerVal = val;
      }
    },
    computed: {
      classes () {
        return {
          's-form-block': !!this.block
        };
      }
    },
    methods: {
      handleSubmit ($event) {
        this.$emit('submit', $event);
      },

      /**
       * 变更表单验证结果
       * @param result 验证结果
       * @param type 类型, 1:formItem, 2:input
       */
      handleValidate (result, type) {
        this.$emit('input', Object.assign(this.innerVal[result.name], result));
      }
    },
    created () {
    }
  };
</script>

<style lang="scss">
  .s-form {

    &-item {
      display: flex;
    }

    &-label {
      line-height: 36px;
      text-align: right;
      width: 100px;
      padding-right: 15px;
    }

    &-content {
      margin-left: 100px;
      flex: 1;
    }

    &-label + &-content {
      margin-left: 0;
    }

    &-block &-item {

    }
  }
</style>