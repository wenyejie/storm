<!--
 - check
 -
 - @author: Storm
 - @date: 2017/12/16
 -->
<template>
  <div class="page page-radio">

    <s-panel title="Radio">
      <s-radio v-model="demo">购买协议</s-radio>
      <div>{{demo}}</div>
    </s-panel>

    <s-panel title="RadioGroup">
      <s-radio-group v-model="demoGroup">
        <s-radio value="guangzhou">广州</s-radio>
        <s-radio value="shenzhen">深圳</s-radio>
        <s-radio value="shanghai">上海</s-radio>
        <s-radio value="beijing">北京</s-radio>
      </s-radio-group>
      <div>{{demoGroup}}</div>
    </s-panel>

    <s-panel title="Block">
      <s-radio v-model="blocGz" block trueValue="guangzhou">广州</s-radio>
      <s-radio v-model="blockSz" block trueValue="shenzhen">深圳</s-radio>
      <s-radio v-model="blockSh" block trueValue="shanghai">上海</s-radio>
    </s-panel>

    <s-panel>
      <template slot="title">inline <small>(默认)</small></template>
      <s-radio v-model="blocGz" trueValue="guangzhou">广州</s-radio>
      <s-radio v-model="blockSz" trueValue="shenzhen">深圳</s-radio>
      <s-radio v-model="blockSh" trueValue="shanghai">上海</s-radio>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vRadio',
    title: 'radio',
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
