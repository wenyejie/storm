<!--
 - check
 -
 - @author: Storm
 - @date: 2017/12/16
 -->
<template>
  <div>
    <s-panel title="Checkbox">
      <s-checkbox v-model="demo">购买协议</s-checkbox>
      <div>{{demo}}</div>
    </s-panel>
    <s-panel title="CheckboxGroup">
      <s-checkbox-group v-model="demoGroup">
        <s-checkbox value="guangzhou">广州</s-checkbox>
        <s-checkbox value="shenzhen">深圳</s-checkbox>
        <s-checkbox value="shanghai">上海</s-checkbox>
        <s-checkbox value="beijing">北京</s-checkbox>
      </s-checkbox-group>
      <div>{{demoGroup}}</div>
    </s-panel>
    <s-panel title="Block">
      <s-checkbox v-model="blocGz" block trueValue="guangzhou">广州</s-checkbox>
      <s-checkbox v-model="blockSz" block trueValue="shenzhen">深圳</s-checkbox>
      <s-checkbox v-model="blockSh" block trueValue="shanghai">上海</s-checkbox>
    </s-panel>
    <s-panel>
      <template slot="title">inline <small>(默认)</small></template>
      <s-checkbox v-model="blocGz" trueValue="guangzhou">广州</s-checkbox>
      <s-checkbox v-model="blockSz" trueValue="shenzhen">深圳</s-checkbox>
      <s-checkbox v-model="blockSh" trueValue="shanghai">上海</s-checkbox>
    </s-panel>
  </div>
</template>

<script>
  import sCheckbox from '../../components/checkbox/index'
  import sCheckboxGroup from '../../components/checkboxGroup/index'

  export default {
    name: 'checkbox',
    components: {
      sCheckbox,
      sCheckboxGroup
    },
    data () {
      return {
        demo: false,

        demoGroup: ['shenzhen'],

        blocGz: true,
        blockSz: true,
        blockSh: true

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
