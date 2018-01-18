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

      // 是否为块元素
      block: Boolean,

      // 方向
      direction: {
        type: String,
        validator (val) {
          return ['vertical'].includes(val)
        }
      },
    },
    computed: {
      classes () {
        return {
          [`s-button-group-block`]: !!this.block,
          [`s-button-group-${this.direction}`]: !!this.direction
        }
      }
    }
  }
</script>

<style lang="scss">
  .s-button-group {

    display: inline-block;
    font-size: 0;

    &-block {
      display: flex;

      .s-button {
        flex: 1;
      }

      &.s-button-group-vertical {
        display: block;

        .s-button {
          display: block;
          width: 100%;
          flex: none;
        }
      }
    }

    .s-button {
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:not(.outline) {

        &:not(:first-child) {
          border-left-color: rgba(255, 255, 255, .5);
        }
      }

      &.outline {
        &:not(:first-child) {
          margin-left: -1px;
        }

        &:hover,
        &:focus {
          position: relative;
        }
      }
    }

    &-vertical .s-button {
      display: block;

      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:not(.outline) {

        &:not(:first-child) {
          border-top-color: rgba(255, 255, 255, .5);
        }
      }
    }

    &.outline.s-button {

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