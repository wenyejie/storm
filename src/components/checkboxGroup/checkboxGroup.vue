<!--
 - Title
 -
 - author: Storm
 - date: 2017/10/14
 -->

<template>
  <div class="s-checkbox-group"><slot></slot></div>
</template>

<script>
  export default {
    name: 'sCheckboxGroup',
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        innerVal: this.value
      }
    },
    methods: {
      /**
       * 更新group的值
       * @param checked 是否选中
       * @param value 选中的值
       */
      update (checked, value) {
        if (checked) {
          this.innerVal.push(value)
        } else {
          const index = this.innerVal.findIndex(item => item === value)
          this.innerVal.splice(index, 1)
        }

        this.$emit('input', this.innerVal)
      }
    }
  }
</script>

<style lang="scss">
  .s-checkbox-group {

  }
</style>
