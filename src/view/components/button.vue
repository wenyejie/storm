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

    <s-panel title="Size">
      <s-button type="primary" size="lg">大型按钮</s-button>
      <s-button type="primary">默认按钮</s-button>
      <s-button type="primary" size="sm">小型按钮</s-button>
      <s-button type="primary" size="xs">更小按钮</s-button>
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

    <s-panel title="loading">
      <s-button type="primary" loading>主要按钮</s-button>
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
      <s-button-group block>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
      </s-button-group>
    </s-panel>

    <s-panel title="Direction vertical">
      <s-button-group direction="vertical">
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
      </s-button-group>
    </s-panel>

    <s-panel title="Group Block">
      <s-button-group direction="vertical" block>
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
        <s-button type="success">主要按钮</s-button>
      </s-button-group>
    </s-panel>

    <s-panel title="Button Attributes">
      <s-table>
        <tr slot="head">
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>type</td>
          <td>类型</td>
          <td>String</td>
          <td>primary, success, warning, danger, info</td>
          <td>~</td>
        </tr>
        <tr>
          <td>nativeType</td>
          <td>原生类型</td>
          <td>String</td>
          <td>button, submit, reset</td>
          <td>button</td>
        </tr>
        <tr>
          <td>size</td>
          <td>大小</td>
          <td>String</td>
          <td>lg, sm, xs</td>
          <td>~</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>是否自动选中</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>outline</td>
          <td>是否为轮廓线</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否加载状态</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>block</td>
          <td>是否为块元素</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
      </s-table>
    </s-panel>

    <s-panel title="Group Attributes">
      <s-table>
        <tr slot="head">
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>direction</td>
          <td>方向</td>
          <td>String</td>
          <td>vertical</td>
          <td>~</td>
        </tr>
        <tr>
          <td>block</td>
          <td>是否为块元素</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
      </s-table>
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
