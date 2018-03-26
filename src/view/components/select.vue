<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="page page-select">

    <s-panel title="Default 默认">
      <div>请选择你工作的城市: {{demo}}</div>
      <s-select v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Size 大小">
      <s-select size="lg" v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select size="sm" v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select size="xs" v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-select disabled v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Block 块级">
      <s-select block v-model="demo">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="multiple 多选">
      请选择你工作的城市: {{demoArray}}
      <s-select multiple block v-model="demoArray">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vSelect',
    data () {
      return {
        demo: '',
        demoArray: []
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>