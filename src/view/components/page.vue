<!--
 - page
 -
 - @author: Storm
 - @date: 2018/02/28
 -->
<template>
  <div class="page page-tab">

    <s-panel title="Default 默认">
      <s-page v-model="page" :totalPage="100"></s-page>
    </s-panel>

    <s-panel title="Size 大小">
      <s-page v-model="page" :totalPage="100" size="sm" hasElevator :pageSize="10"></s-page>
      <s-page v-model="page" :totalPage="100" size="xs" hasElevator :pageSize="10"></s-page>
    </s-panel>

    <s-panel title="HasSizer 是否有筛选器">
      <s-page v-model="page" :totalPage="100" hasSizer></s-page>
    </s-panel>

    <s-panel title="hasElevator 是否有电梯">
      <s-page v-model="page" :totalPage="100" hasElevator></s-page>
    </s-panel>

    <s-panel title="pageSize 是否有每页条数">
      <s-page v-model="page" :totalPage="100" :pageSize="10"></s-page>
    </s-panel>

    <s-panel title="hasInfo 是否有信息描述">
      <s-page v-model="page" :totalPage="100" hasInfo></s-page>
    </s-panel>

    <s-panel title="disabled 禁用">
      <s-page v-model="page" :totalPage="100" disabled></s-page>
    </s-panel>

    <s-panel title="Page Attributes">
      <s-table>
        <tr slot="head">
          <th>Name</th>
          <th>Explain</th>
          <th>Required</th>
          <th>Type</th>
          <th>Option</th>
          <th>Default</th>
        </tr>
        <tr>
          <td>value</td>
          <td>当前页</td>
          <td>true</td>
          <td>Number</td>
          <td>~</td>
          <td>0</td>
        </tr>
        <tr>
          <td>totalPage</td>
          <td>总页数</td>
          <td>true</td>
          <td>Number</td>
          <td>~</td>
          <td>0</td>
        </tr>
        <tr>
          <td>totalSize</td>
          <td>总条数</td>
          <td>true</td>
          <td>Number</td>
          <td>~</td>
          <td>0</td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>每页条数</td>
          <td>true</td>
          <td>Number</td>
          <td>~</td>
          <td>0</td>
        </tr>
      </s-table>
    </s-panel>

  </div>
</template>

<script>

  export default {
    name: 'vPage',
    data () {
      return {
        page: 0
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>