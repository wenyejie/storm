<!--
 - 
 -
 - @author: Storm
 - @date: 2018/05/28
 -->
<template>
  <div class="page page-loading">

    <s-panel title="Default 默认">

      <s-button v-tooltip="'demo'"
                type="primary">Change</s-button>
    </s-panel>

  </div>
</template>

<script>
  import Vue from 'vue';
  import tooltip from '../../directives/tooltip';
  export default {
    name: 'vTooltip',
    directives: {tooltip},
    data () {
      return {
        loading: false
      }
    },
    methods: {
    },
    mounted () {
      console.log(Vue.compile(`<div>{{content}}</div>`));
    }
  }
</script>

<style lang="scss" scoped>
 .demo {
   height: 200px;
   border: 1px solid #dcdcdc;
   background-color: #fdfdfd;
 }
</style>