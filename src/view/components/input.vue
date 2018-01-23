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

    <s-panel title="Size 大小">
      <s-input placeholder="请输入手机号码" size="lg"></s-input>
      <s-input placeholder="请输入手机号码"></s-input>
      <s-input placeholder="请输入手机号码" size="sm"></s-input>
      <s-input placeholder="请输入手机号码" size="xs"></s-input>
    </s-panel>

    <s-panel title="Type 类型" class="page-panel-type">
      <s-input placeholder="请输入text" type="text"></s-input>
      <s-input placeholder="请输入number" type="number"></s-input>
      <s-input placeholder="请输入email" type="email"></s-input>
      <s-input placeholder="请输入url" type="url"></s-input>
      <s-input placeholder="请输入search" type="search"></s-input>
      <s-input placeholder="请输入color" type="color"></s-input>
      <s-input placeholder="请输入date" type="date"></s-input>
      <s-input placeholder="请输入datetime" type="datetime"></s-input>
      <s-input placeholder="请输入datetime-local" type="datetime-local"></s-input>
      <s-input placeholder="请输入month" type="month"></s-input>
      <s-input placeholder="请输入password" type="password"></s-input>
      <s-input placeholder="请输入tel" type="tel"></s-input>
      <s-input placeholder="请输入week" type="week"></s-input>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-input placeholder="请输入手机号码" disabled></s-input>
    </s-panel>

    <s-panel title="Readonly 只读">
      <s-input placeholder="请输入手机号码" readonly></s-input>
    </s-panel>

    <s-panel title="Block 块级">
      <s-input placeholder="请输入手机号码" block></s-input>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'viewInput'
  }
</script>

<style lang="scss" scoped>
  .page {
    &-panel-type {
      .s-input {
        margin: 3px 0;
      }
    }
  }
</style>