<!--
 - tooltip
 -
 - @author: Storm
 - @date: 2018/04/29
 -->
<template>
  <div class="page page-tooltip">
    <s-panel title="Default 默认">
      <s-countdown :end-date="endDate" format="dd天 hh天mm分ss秒" />
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vCountdown',
    title: 'countdown',
    data () {
      return {
        endDate: new Date('2018-09-10')
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
