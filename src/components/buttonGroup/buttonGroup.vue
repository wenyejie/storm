<!--
 - button-group
 -
 - @author: Storm
 - @date: 2017/12/22
 -->
<template>
  <div class="s-button-group" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'sButtonGroup',
    props: {
      block: Boolean
    },
    computed: {
      classes () {
        return {
          [`s-button-group-block`]: !!this.block
        }
      }
    }
  }
</script>

<style lang="scss">
  .s-button {

    &-group {
      display: inline-block;
      font-size: 0;

      &-block {
        display: block;
      }
    }

    &-group > & {
      border-radius: 0;
    }

    &-group > &:not(.s-button-block) {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

    }

    &-group > &:not(.outline):not(.s-button-block) {

      &:not(:first-child) {
        border-left-color: rgba(255, 255, 255, .5);
      }
    }

    &-group > &.outline:not(.s-button-block) {
      &:not(:first-child) {
        margin-left: -1px;
      }

      &:hover,
      &:focus {
        position: relative;
      }
    }

    &-group > &.s-button-block {

      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    &-group > &.s-button-block:not(.outline) {

      &:not(:first-child) {
        border-top-color: rgba(255, 255, 255, .5);
      }
    }

    &-group > &.outline.s-button-block {

      &:not(:first-child) {
        margin-top: -1px;
      }

      &:hover,
      &:focus {
        position: relative;
      }
    }

  }
</style>