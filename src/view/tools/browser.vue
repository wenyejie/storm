<!--
 - browser
 -
 - @author: Storm
 - @date: 2018/02/24
 -->
<template>
  <div class="page page-browser">
    <s-panel title="Default 默认">
      <s-highlight>{{browser}}</s-highlight>
    </s-panel>
  </div>
</template>

<script>
  import browser from '../../cores/browser';
  export default {
    name: 'browser',
    data () {
      return {
        browser
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>