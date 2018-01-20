<!--
 - dialog
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <div class="page page-dialog">
    <s-panel title="Default 默认">
      <s-button @click="defaultDialog" type="primary">Default Dialog</s-button>
      <s-dialog v-model="defaultDialogModel" title="我是dialog标题">我是dialog内容</s-dialog>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'viewDialog',
    data () {
      return {
        defaultDialogModel: false
      }
    },
    methods: {
      defaultDialog () {
        this.defaultDialogModel = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>