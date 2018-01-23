<!--
 - table
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="page page-table">
    <s-panel title="Default 默认">
      <s-table title="我是表格标题">
        <tr slot="head">
          <th>参数</th>
          <th>类型</th>
          <th>默认值</th>
          <th>可选值</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>~</td>
          <td>~</td>
          <td>表格标题</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有边框</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否占满一行</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否有hover效果</td>
        </tr>
        <tr>
          <td>stripe</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有条纹效果</td>
        </tr>
      </s-table>
    </s-panel>
    <s-panel title="Stripe 条纹">
      <s-table title="我是表格标题" stripe>
        <tr slot="head">
          <th>参数</th>
          <th>类型</th>
          <th>默认值</th>
          <th>可选值</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>~</td>
          <td>~</td>
          <td>表格标题</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有边框</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否占满一行</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否有hover效果</td>
        </tr>
        <tr>
          <td>stripe</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有条纹效果</td>
        </tr>
      </s-table>
    </s-panel>
    <s-panel title="Table Attributes">
      <s-table>
        <tr slot="head">
          <th>参数</th>
          <th>类型</th>
          <th>默认值</th>
          <th>可选值</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>~</td>
          <td>~</td>
          <td>表格标题</td>
        </tr>
        <tr>
          <td>border</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有边框</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否占满一行</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true, false</td>
          <td>是否有hover效果</td>
        </tr>
        <tr>
          <td>stripe</td>
          <td>Boolean</td>
          <td>false</td>
          <td>true, false</td>
          <td>是否有条纹效果</td>
        </tr>
      </s-table>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'viewTable'
  }
</script>

<style lang="scss" scoped>

</style>