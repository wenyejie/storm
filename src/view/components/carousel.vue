<!--
 - carousel
 -
 - @author: Storm
 - @date: 2018/02/26
 -->
<template>
  <div class="page page-carousel">
    <s-panel title="Default 默认">
      <s-carousel class="demo">
        <s-carousel-item><img src="http://img.la/600x300?s=one"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=two"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=three"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=four"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=five"></s-carousel-item>
      </s-carousel>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vCarousel'
  }
</script>

<style lang="scss" scoped>
  .demo {
    width: 600px;
    height: 300px;


    img {
      display: block;
    }
  }
</style>