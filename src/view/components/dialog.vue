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
      <s-dialog v-model="sizeDfDialogModel" title="我是dialog标题">我是dialog内容</s-dialog>
      <s-button @click="sizeSmDialogModel = true" type="primary">Sm Dialog</s-button>
      <s-dialog v-model="sizeSmDialogModel" size="sm" title="我是dialog标题">我是dialog内容</s-dialog>
    </s-panel>

    <s-panel title="hasMask 遮罩">
      <s-button @click="hasMaskDialogModel = true" type="primary">hasMask Dialog</s-button>
      <s-dialog v-model="hasMaskDialogModel"
                :has-mask="false"
                title="我是dialog标题">我是dialog内容</s-dialog>
      <s-highlight lang="html">&lt;s-dialog v-model="hasMaskDialogModel"
          :has-mask="false"
          title="我是dialog标题"&gt;我是dialog内容&lt;/s-dialog&gt;</s-highlight>
    </s-panel>

    <s-panel title="button 按钮">
      <s-button @click="footerButtonDialogModel = true" type="primary">button Dialog</s-button>
      <s-dialog v-model="footerButtonDialogModel" title="我是dialog标题">
        我是dialog内容
        <template slot="footerButton">
          <s-button type="success">fuck me</s-button>
        </template>
      </s-dialog>
      <s-highlight lang="html">&lt;s-dialog v-model="footerButtonDialogModel" title="我是dialog标题"&gt;
  我是dialog内容
  &lt;template slot="footerButton"&gt;
    &lt;s-button type="success"&gt;fuck me&lt;/s-button&gt;
  &lt;/template&gt;
&lt;/s-dialog&gt;</s-highlight>
    </s-panel>

    <s-panel title="confirm 确定">
      <s-button @click="confirmDialogModel" type="primary">confirm Dialog</s-button>
      <s-highlight lang="javascript">this.$dialog.confirm('fuck me!');</s-highlight>
    </s-panel>

    <s-panel title="alert 警觉">
      <s-button @click="alertDialogModel" type="primary">alert Dialog</s-button>
      <s-highlight lang="javascript">this.$dialog.alert('fuck me!');</s-highlight>
    </s-panel>

  </div>
</template>

<script>

  export default {
    name: 'viewDialog',
    title: 'dialog',
    data () {
      return {
        defaultDialogModel: false,
        sizeLgDialogModel: false,
        sizeMdDialogModel: false,
        sizeDfDialogModel: false,
        sizeSmDialogModel: false,
        hasMaskDialogModel: false,
        footerButtonDialogModel: false
      }
    },
    methods: {

      confirmDialogModel () {
        this.$dialog.confirm('fuck me!');
      },

      alertDialogModel () {
        this.$dialog.alert('fuck me!');
      }
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>

</style>