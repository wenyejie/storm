<!--
 - dialog
 -
 - @author: Storm
 - @date: 2018/01/20
 -->
<template>
  <div class="page page-dialog">

    <s-panel title="Default 默认">
      <s-button @click="defaultDialogModel = true" type="primary">Default Dialog</s-button>
      <s-dialog v-model="defaultDialogModel" title="我是dialog标题">我是dialog内容</s-dialog>
    </s-panel>

    <s-panel title="Size 尺寸">
      <s-button @click="sizeLgDialogModel = true" type="primary">Lg Dialog</s-button>
      <s-dialog v-model="sizeLgDialogModel" size="lg" title="我是dialog标题">我是dialog内容</s-dialog>
      <s-button @click="sizeMdDialogModel = true" type="primary">Md Dialog</s-button>
      <s-dialog v-model="sizeMdDialogModel" size="md" title="我是dialog标题">我是dialog内容</s-dialog>
      <s-button @click="sizeDfDialogModel = true" type="primary">Df Dialog</s-button>
      <s-dialog v-model="sizeDfDialogModel" size="sm" title="我是dialog标题">我是dialog内容</s-dialog>
      <s-button @click="sizeSmDialogModel = true" type="primary">Sm Dialog</s-button>
      <s-dialog v-model="sizeSmDialogModel" size="sm" title="我是dialog标题">我是dialog内容</s-dialog>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'viewDialog',
    data () {
      return {
        defaultDialogModel: false,
        sizeLgDialogModel: false,
        sizeMdDialogModel: false,
        sizeDfDialogModel: false,
        sizeSmDialogModel: false
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>