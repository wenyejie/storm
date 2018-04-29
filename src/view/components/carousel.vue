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
        <s-carousel-item><img src="http://img.la/600x300?s=one" alt="one"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=two" alt="two"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=three" alt="three"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=four" alt="four"></s-carousel-item>
        <s-carousel-item><img src="http://img.la/600x300?s=five" alt="five"></s-carousel-item>
      </s-carousel>
    </s-panel>
  </div>
</template>

<script>
  export default {
    name: 'vCarousel',
    title: 'carousel'
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