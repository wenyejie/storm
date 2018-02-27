<!--
 - carousel-item
 -
 - @author: Storm
 - @date: 2018/02/26
 -->
<template>
  <div class="s-carousel-item" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'carousel-item',
    computed: {
      index () {
        return this.$parent.index
      },
      uid () {
        return this.$parent.uid
      },
      classes () {
        return {
          ['on']: this.$parent.uid === this._uid
        }
      }
    },
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