<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-query">
    <textarea rows="10" v-model="string" @input="queryStringParse"></textarea>
    <s-highlight lang="json" v-if="decodeString">{{decodeString}}</s-highlight>
  </div>
</template>

<script>
   export default {
    name: 'vHtmlEncode',
    data () {
      return {
        string: '',
        decodeString: ''
      }
    },
    methods: {
      queryStringParse () {
        this.decodeString = this.string.replace(/</g, '&lt;').replace(/>/g, '&gt;');
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