<!--
 - radioGroup
 -
 - author: Storm
 - date: 2017/11/05
 -->

<template>
  <div class="s-radio-group"><slot></slot></div>
</template>

<script>
  export default {
    name: 'sRadioGroup',
    props: {
      value: {}
    },
    data () {
      return {
        innerVal: this.value
      }
    },
    methods: {
      /**
       * 更新group的值
       * @param value 选中的值
       */
      update (value) {
        this.innerVal = value

        this.$emit('input', this.innerVal)
      }
    }
  }
</script>

<style lang="scss">

</style>
