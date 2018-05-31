<!--
 - 
 -
 - @author: Storm
 - @date: 2018/05/28
 -->
<template>
  <div class="page page-loading">

    <s-panel title="Default 默认">
      <div class="demo" v-loading="loading">button</div>

      <s-button @click="toggleLoading" type="primary">Change</s-button>
    </s-panel>

  </div>
</template>

<script>
  import loading from '../../directives/loading';
  export default {
    name: 'vLoading',
    directives: {loading},
    data () {
      return {
        loading: false
      }
    },
    methods: {
      toggleLoading () {
        this.loading = !this.loading;
      }
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