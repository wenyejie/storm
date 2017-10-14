<!--
 - Title
 -
 - author: Storm
 - date: 2017/10/14
 -->

<template>
  <slot></slot>
</template>

<script>
  export default {
    name: 'sCheckboxGroup',
    props: {
      value: {}
    },
    data () {
      return {
        items: []
      }
    },
    methods: {

      /**
       * 增加子项
       * @param item 子项
       */
      addItem (item) {
        this.items.push(item)
      },
      removeItem () {

      }
    }
  }
</script>

<style lang="scss">

</style>
