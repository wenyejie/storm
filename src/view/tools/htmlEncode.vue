<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-query">
    <s-textarea rows="5" v-model="string"></s-textarea>
    <pre>{{decodeString}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'vHtmlEncode',
    title: 'htmlEncode',
    data () {
      return {
        string: ''
      }
    },
    computed: {
      decodeString () {
        return this.string.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../styles/variable";
  pre {
    @include text-wrap;
  }
</style>