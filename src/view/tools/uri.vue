<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-uri">
    <textarea rows="10" v-model="string"></textarea>
    <s-row justify="between" class="mt-20">
      <s-col><s-button type="primary" @click="encode">encode 转码</s-button></s-col>
      <s-col><s-button type="primary" @click="decode">decode 解码</s-button></s-col>
    </s-row>
    <s-input class="mt-20" v-model="translatedString" block></s-input>
  </div>
</template>

<script>

   export default {
     name: 'query',
    data () {
      return {
        string: location.href,
        translatedString: ''
      }
    },
    methods: {
      encode () {
        this.translatedString = encodeURIComponent(this.string);
      },

      decode () {
        this.translatedString = decodeURIComponent(this.string);
      }
    }
  }
</script>


<style lang="scss" scoped>
  textarea {
    display: block;
    width: 100%;
  }


  pre {
    word-break: break-all;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-width: 100%;
  }
</style>