<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/22
 -->
<template>
  <div class="s-input">
    <input :type="type">
  </div>
</template>

<script>
  export default {
    name: 'sInput',
    props: {

      // 类型
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>