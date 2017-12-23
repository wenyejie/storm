<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="page page-input">

    <s-panel title="Default 默认">
      <s-input placeholder="请输入手机号码"></s-input>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-input placeholder="请输入手机号码" disabled></s-input>
    </s-panel>

    <s-panel title="Readonly 只读">
      <s-input placeholder="请输入手机号码" readonly></s-input>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'viewInput'
  }
</script>

<style lang="scss" scoped>

</style>