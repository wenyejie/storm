<!--
 - counter
 -
 - @author: Storm
 - @date: 2018/07/26
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-counter></s-counter>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-counter disabled></s-counter>
    </s-panel>

    <s-panel title="Step 步骤">
      <s-counter :step="2"></s-counter>
    </s-panel>

    <s-panel title="Max 最大值">
      <s-counter :max="10" v-model="maxVal"></s-counter>
      <div>{{maxVal}}</div>
    </s-panel>

    <s-panel title="Min 最小值">
      <s-counter :min="0" v-model="minVal"></s-counter>
      <div>{{minVal}}</div>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vCounter',
    title: 'Counter 计数器',
    data () {
      return {
        maxVal: 0,
        minVal: 5
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
