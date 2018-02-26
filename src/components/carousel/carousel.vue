<!--
 - carousel
 -
 - @author: Storm
 - @date: 2018/02/26
 -->
<template>
  <div class="s-carousel">
    <slot></slot>
    <div class="s-carousel-pagination">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousel'
  }
</script>

<style lang="scss">
  @import "../../styles/variable";

  .s-carousel {


    &-pagination {

    }

  }
</style>