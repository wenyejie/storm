<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-uri">
    <s-textarea v-model="string" :autoRows="{minRows: 5}"></s-textarea>
    <s-row justify="between" class="mt-20">
      <s-col>
        <s-button type="primary" @click="encode">encode 转码</s-button>
      </s-col>
      <s-col>
        <s-button type="primary" @click="decode">decode 解码</s-button>
      </s-col>
    </s-row>
    <s-textarea :autoRows="{minRows: 5}" class="mt-20" v-model="translatedString" block></s-textarea>
  </div>
</template>

<script>

  export default {
    name: 'vUri',
    title: 'uri',
    data () {
      return {
        string: '',
        translatedString: ''
      }
    },
    methods: {
      encode () {
        this.translatedString = encodeURIComponent(this.string)
      },

      decode () {
        this.translatedString = decodeURIComponent(this.string)
      }
    }
  }
</script>


<style lang="scss" scoped>
</style>