<!--
 - textarea
 -
 - @author: Storm
 - @date: 2018/02/08
 -->
<template>
  <div class="page page-textarea">

    <s-panel title="Default 默认">
      <s-textarea v-model="string"></s-textarea>
      <s-highlight lang="html">&lt;s-textarea v-model="string"&gt;&lt;/s-textarea&gt;</s-highlight>
    </s-panel>

    <s-panel title="Disabled 禁用">
      <s-textarea v-model="string" disabled></s-textarea>
      <s-highlight lang="html">&lt;s-textarea v-model="string" disabled&gt;&lt;/s-textarea&gt;</s-highlight>
    </s-panel>

    <s-panel title="Readonly 只读">
      <s-textarea v-model="string" readonly></s-textarea>
      <s-highlight lang="html">&lt;s-textarea v-model="string" readonly&gt;&lt;/s-textarea&gt;</s-highlight>
    </s-panel>

    <s-panel title="Placeholder 占位符">
      <s-textarea placeholder="please input you name"></s-textarea>
      <s-highlight lang="html">&lt;s-textarea placeholder="please input you name"&gt;&lt;/s-textarea&gt;</s-highlight>
    </s-panel>

    <s-panel title="autoRows 自适应高度">
      <s-textarea placeholder="please input you name" autoRows></s-textarea>
      <s-highlight lang="html">&lt;s-textarea placeholder="please input you name"&gt;&lt;/s-textarea&gt;</s-highlight>
    </s-panel>

  </div>
</template>

<script>

  export default {
    name: 'vTextarea',
    data () {
      return {
        string: 'please fuck me!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>