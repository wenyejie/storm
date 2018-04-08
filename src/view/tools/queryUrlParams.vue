<!--
 - query
 -
 - @author: Storm
 - @date: 2018/01/23
 -->
<template>
  <div class="page page-query">
    <s-textarea rows="5" v-model="queryString"></s-textarea>
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
  @import "../../styles/variable";
  pre {
    @include text-wrap;
  }
</style>