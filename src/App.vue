<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
</style>
