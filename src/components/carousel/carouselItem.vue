<!--
 - carousel-item
 -
 - @author: Storm
 - @date: 2018/02/26
 -->
<template>
  <div class="s-carousel-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'carousel-item',
    created () {
      this.$parent.add(this._uid)
    },
    beforeDestroy () {
      this.$parent.remove(this._uid)
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variable";
  .s-carousel-item {

  }
</style>