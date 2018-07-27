<!--
 - switch
 -
 - @author: Storm
 - @date: 2018/07/27
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-switch></s-switch>
    </s-panel>

    <s-panel title="TrueValue 开的值">
      <s-switch trueValue="我是开的" v-model="trueValue"></s-switch>
      {{trueValue}}
    </s-panel>

    <s-panel title="FalseValue 关的值">
      <s-switch falseValue="我是关的" v-model="falseValue"></s-switch>
      {{falseValue}}
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vSwitch',
    title: 'Switch 开关',
    data () {
      return {
        falseValue: true,
        trueValue: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
