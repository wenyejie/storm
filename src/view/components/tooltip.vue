<!--
 - tooltip
 -
 - @author: Storm
 - @date: 2018/04/29
 -->
<template>
  <div class="page page-tooltip">
    <s-panel title="Default 默认">
      <s-tooltip content="tooltip demo" position="left-bottom"><s-button>Tooltip</s-button></s-tooltip>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vTooltip',
    title: 'tooltip'
  }
</script>

<style lang="scss" scoped>
  .s-button {
    width: 200px;
  }
</style>