<!--
 - switch
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-rate v-model="demo"></s-rate>
    </s-panel>

    <s-panel title="ShowText 展示文本">
      <s-rate v-model="demo" show-text></s-rate>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vRate',
    title: 'Rate 评分',
    data () {
      return {
        demo: 3
      }
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
</style>
