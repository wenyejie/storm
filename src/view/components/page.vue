<!--
 - page
 -
 - @author: Storm
 - @date: 2018/02/28
 -->
<template>
  <div class="page page-tab">

    <s-panel title="Default 默认">
      当前页: {{page}}
      <s-page v-model="page" :total="100"></s-page>
    </s-panel>

    <s-panel title="HasSizer 是否有筛选器">
      当前页: {{page}}
      <s-page v-model="page" :total="100" sizer></s-page>
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