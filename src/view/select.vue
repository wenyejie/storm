<!--
 - input
 -
 - @author: Storm
 - @date: 2017/12/23
 -->
<template>
  <div class="page page-select">

    <s-panel title="Default 默认">
      <s-select>
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Size 大小">
      <s-select size="lg">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select>
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select size="sm">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
      <s-select size="xs">
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-select disabled>
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="Block 块级">
      <s-select block>
        <option value="">请选择你工作的城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </s-select>
    </s-panel>

    <s-panel title="multiple 多选">
      <s-select multiple block>
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
    name: 'viewSelect'
  }
</script>

<style lang="scss" scoped>
</style>