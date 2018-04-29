<!--
 - row
 -
 - author: Storm
 - date: 2017/09/20
 -->

<template>
  <div class="s-col" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
  export default {
    name: 'sCol',
    props: {
      align: {
        type: String,
        validator (val) {
          return ['top', 'bottom', 'center', 'stretch'].includes(val)
        }
      },

      span: [Number, String],
      offset: [Number, String]
    },
    data () {
      return {}
    },
    computed: {
      gutter () {
        return this.$parent.gutter
      },
      classes () {
        return {
          [`s-col-${this.span}`]: !!this.span,
          [`s-col-offset-${this.offset}`]: !!this.offset,
          [`s-col-align-${this.align}`]: !!this.align
        }
      },
      styles () {
        const result = {}
        if (this.gutter) {
          result.paddingLeft = this.gutter + (/^\d+$/.test(this.gutter) ? 'px' : '')
          result.paddingRight = result.paddingLeft
        }
        return result
      }
    },
    methods: {}
  }
</script>

<!-- /**/-->

<style lang="scss">
  .s-col {

    @for $i from 1 through 24 {
      &-#{$i} {
        flex: 0 0 $i / 24 * 100%
      }
      &-offset-#{$i} {
        margin-left: $i / 24 * 100%
      }
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
