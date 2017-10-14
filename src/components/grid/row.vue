<!--
 - row
 -
 - author: Storm
 - date: 2017/09/20
 -->

<template>
  <div class="s-row" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
  export default {
    name: 'row',
    props: {
      gutter: {
        type: [Number, String],
        default: 0
      },
      align: {
        type: String,
        validator (val) {
          return ['top', 'bottom', 'center', 'stretch'].includes(val)
        }
      },
      justify: {
        type: String,
        validator (val) {
          return ['left', 'right', 'center', 'between', 'around'].includes(val)
        }
      },

      wrap: Boolean
    },
    data () {
      return {}
    },
    computed: {
      classes () {
        return {
          [`s-row-justify-${this.justify}`]: !!this.justify,
          [`s-row-align-${this.align}`]: !!this.align,
          [`s-row-wrap`]: !!this.wrap
        }
      },
      styles () {
        const result = {}
        if (this.gutter) {
          result.marginLeft = '-' + this.gutter + (/^\d+$/.test(this.gutter) ? 'px' : '')
          result.marginRight = result.marginLeft
        }
        return result
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .s-row {
    display: flex;

    &-wrap {
      flex-wrap: wrap;
    }

    &-justify-left {
      justify-content: flex-start;
    }
    &-justify-right {
      justify-content: flex-end;
    }
    &-justify-center {
      justify-content: center;
    }
    &-justify-between {
      justify-content: space-between;
    }
    &-justify-around {
      justify-content: space-around;
    }
    &-align-top {
      align-items: flex-start;
    }
    &-align-bottom {
      align-items: flex-end;
    }
    &-align-center {
      align-items: center;
    }
    &-align-stretch {
      align-items: stretch;
    }
  }
</style>
