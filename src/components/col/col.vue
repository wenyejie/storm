<!--
 - row
 -
 - author: Storm
 - date: 2017/09/20
 -->

<template>
  <div class="s-col" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "sCol",
    props: {
      align: {
        type: String,
        validator (val) {
          return ["top", "bottom", "center", "stretch"].includes(val);
        }
      },

      span: [Number, String],
      offset: [Number, String]
    },
    data () {
      return {};
    },
    computed: {
      gutter () {
        return this.$parent.gutter;
      },
      classes () {
        return {
          [`s-col-${this.span}`]: !!this.span,
          [`s-col-offset-${this.offset}`]: !!this.offset,
          [`s-col-align-${this.align}`]: !!this.align
        };
      },
      styles () {
        const result = {};
        if (this.gutter) {
          result.paddingLeft = this.gutter + (/^\d+$/.test(this.gutter) ? "px" : "");
          result.paddingRight = result.paddingLeft;
        }
        return result;
      }
    },
    methods: {}
  };
</script>

<!-- /**/-->

<style lang="scss">
  .s-col {

    &-1 {
      flex: 0 0 4.16667%
    }
    &-offset-1 {
      margin-left: 4.16667%
    }
    &-2 {
      flex: 0 0 8.33333%
    }
    &-offset-2 {
      margin-left: 8.33333%
    }
    &-3 {
      flex: 0 0 12.5%
    }
    &-offset-3 {
      margin-left: 12.5%
    }
    &-4 {
      flex: 0 0 16.66667%
    }
    &-offset-4 {
      margin-left: 16.66667%
    }
    &-5 {
      flex: 0 0 20.83333%
    }
    &-offset-5 {
      margin-left: 20.83333%
    }
    &-6 {
      flex: 0 0 25%
    }
    &-offset-6 {
      margin-left: 25%
    }
    &-7 {
      flex: 0 0 29.16667%
    }
    &-offset-7 {
      margin-left: 29.16667%
    }
    &-8 {
      flex: 0 0 33.33333%
    }
    &-offset-8 {
      margin-left: 33.33333%
    }
    &-9 {
      flex: 0 0 37.5%
    }
    &-offset-9 {
      margin-left: 37.5%
    }
    &-10 {
      flex: 0 0 41.66667%
    }
    &-offset-10 {
      margin-left: 41.66667%
    }
    &-11 {
      flex: 0 0 45.83333%
    }
    &-offset-11 {
      margin-left: 45.83333%
    }
    &-12 {
      flex: 0 0 50%
    }
    &-offset-12 {
      margin-left: 50%
    }
    &-13 {
      flex: 0 0 54.16667%
    }
    &-offset-13 {
      margin-left: 54.16667%
    }
    &-14 {
      flex: 0 0 58.33333%
    }
    &-offset-14 {
      margin-left: 58.33333%
    }
    &-15 {
      flex: 0 0 62.5%
    }
    &-offset-15 {
      margin-left: 62.5%
    }
    &-16 {
      flex: 0 0 66.66667%
    }
    &-offset-16 {
      margin-left: 66.66667%
    }
    &-17 {
      flex: 0 0 70.83333%
    }
    &-offset-17 {
      margin-left: 70.83333%
    }
    &-18 {
      flex: 0 0 75%
    }
    &-offset-18 {
      margin-left: 75%
    }
    &-19 {
      flex: 0 0 79.16667%
    }
    &-offset-19 {
      margin-left: 79.16667%
    }
    &-20 {
      flex: 0 0 83.33333%
    }
    &-offset-20 {
      margin-left: 83.33333%
    }
    &-21 {
      flex: 0 0 87.5%
    }
    &-offset-21 {
      margin-left: 87.5%
    }
    &-22 {
      flex: 0 0 91.66667%
    }
    &-offset-22 {
      margin-left: 91.66667%
    }
    &-23 {
      flex: 0 0 95.83333%
    }
    &-offset-23 {
      margin-left: 95.83333%
    }
    &-24 {
      flex: 0 0 100%
    }
    &-offset-24 {
      margin-left: 100%
    }

    &-align {

      &-top {
        align-self: flex-start;
      }

      &-bottom {
        align-self: flex-end;
      }

      &-center {
        align-self: center;
      }

      &-stretch {
        align-self: stretch;
      }
    }

  }
</style>
