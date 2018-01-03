<!--
 - button
 -
 - @author: Storm
 - @date: 2017/12/21
 -->
<template>
  <div class="page page-button">

    <s-panel title="Default">
      <s-button>默认按钮</s-button>
      <s-highlight lang="html">&lt;s-button&gt;默认按钮&lt;/s-button&gt;</s-highlight>
    </s-panel>

    <s-panel title="Type">
      <s-button type="primary">主要按钮</s-button>
      <s-button type="success">成功按钮</s-button>
      <s-button type="warning">警告按钮</s-button>
      <s-button type="info">信息按钮</s-button>
    </s-panel>

    <s-panel title="Outline">
      <s-button type="primary" outline>主要按钮</s-button>
      <s-button type="success" outline>成功按钮</s-button>
      <s-button type="warning" outline>警告按钮</s-button>
      <s-button type="info" outline>信息按钮</s-button>
    </s-panel>

    <s-panel title="Disabled">
      <s-button type="primary" outline disabled>主要按钮</s-button>
      <s-button type="success" outline disabled>成功按钮</s-button>
      <s-button type="warning" disabled>警告按钮</s-button>
      <s-button type="info" disabled>信息按钮</s-button>
    </s-panel>

    <s-panel title="Group">
      <s-button-group>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
      </s-button-group>
    </s-panel>

    <s-panel title="Group Block">
      <s-button-group>
        <s-button type="success" block>主要按钮</s-button>
        <s-button type="success" block>主要按钮</s-button>
        <s-button type="success" block>主要按钮</s-button>
        <s-button type="success" block>主要按钮</s-button>
      </s-button-group>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'viewButton'
  }
</script>

<style lang="scss" scoped>

</style>
