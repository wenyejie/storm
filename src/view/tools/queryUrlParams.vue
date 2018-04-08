<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-query">
    <textarea rows="10" v-model="queryString"></textarea>
    <pre>{{queryJson}}</pre>
  </div>
</template>

<script>
  import queryUrlParams from '../../utils/queryUrlParams';

   export default {
    name: 'vQueryUrlParams',
    data () {
      return {
        queryString: ''
      }
    },
    computed: {
      queryJson () {
        return queryUrlParams(this.queryString)
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