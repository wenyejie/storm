<!--
 - switch
 -
 - @author: Storm
 - @date: 2018/07/30
 -->
<template>
  <div class="page page-color">

    <s-panel title="Default 默认">
      <s-progress v-model="demo"></s-progress>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vProgress',
    title: 'Progress 进度条',
    data () {
      return {
        demo: 0
      }
    },
    created () {
      this.timer = setInterval(() => {
        this.demo++;
        if (this.demo >= 100) clearInterval(this.timer)
      }, 100)
    }
  }
</script>

<style lang="scss" scoped>

</style>
