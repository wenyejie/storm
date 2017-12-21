<!--
 - icon
 -
 - @author: Storm
 - @date: 2017/12/20
 -->
<template>
  <div class="page page-icon">

    <s-panel title="Default">
      <s-icon type="check"></s-icon>
    </s-panel>

    <s-panel title="Size">
      <s-icon type="loading" :size="14"></s-icon>
      <s-icon type="loading" :size="16"></s-icon>
      <s-icon type="loading" :size="18"></s-icon>
      <s-icon type="loading" :size="20"></s-icon>
      <s-icon type="loading" :size="22"></s-icon>
      <s-icon type="loading" :size="24"></s-icon>
      <s-icon type="loading" :size="26"></s-icon>
      <s-icon type="loading" :size="28"></s-icon>
    </s-panel>

    <s-panel title="Color">
      <s-icon type="loading" :size="18" color="red"></s-icon>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'icon'
  }
</script>

<style lang="scss" scoped>

</style>
