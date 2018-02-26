<!--
 - message
 -
 - @author: Storm
 - @date: 2018/02/24
 -->
<template>
  <div class="page page-message">

    <s-panel title="Default 默认">
      <s-button @click="demo1 = true" type="primary">默认</s-button>
      <s-message v-model="demo1">我是消息内容</s-message>
    </s-panel>

    <s-panel title="Type 类型">
      <s-button @click="demo2 = true" type="success">success</s-button>
      <s-button @click="demo3 = true" type="info">info</s-button>
      <s-button @click="demo4 = true" type="warning">warning</s-button>
      <s-button @click="demo5 = true" type="danger">danger</s-button>
      <s-message v-model="demo2" type="success">我是消息内容</s-message>
      <s-message v-model="demo3" type="info">我是消息内容</s-message>
      <s-message v-model="demo4" type="warning">我是消息内容</s-message>
      <s-message v-model="demo5" type="danger">我是消息内容</s-message>
    </s-panel>

    <s-panel title="Title 标题">
      <s-button @click="demo6 = true" type="success">success</s-button>
      <s-message v-model="demo6" type="success" title="提示">我是消息内容</s-message>
    </s-panel>

  </div>
</template>

<script>
  export default {
    name: 'vMessage',
    data () {
      return {
        demo1: false,
        demo2: false,
        demo3: false,
        demo4: false,
        demo5: false,
        demo6: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>