<!--
 - icon
 -
 - @author: Storm
 - @date: 2017/12/20
 -->
<template>
  <i class="s-icon"
     :style="styles"
     :class="[`s-icon-${type}`]"></i>
</template>

<script>
  export default {
    name: 'sIcon',
    props: {

      // 类型
      type: {
        required: true,
        type: String
      },

      // 大小
      size: {
        type: [String, Number]
      },

      // 颜色
      color: {
        type: [String]
      }
    },
    computed: {
      styles () {
        const result = {}

        // 判断是否为number类型
        if (typeof this.size === 'number') { // 是
          result.fontSize = `${this.size}px`
        } else if (typeof this.size === 'string' && /\d/.test(this.size)) {
          result.fontSize = this.size
        }

        // 判断是否有颜色
        if (this.color) {
          result.color = this.color
        }
        return result
      }
    }
  }
</script>

<style lang="scss">

  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_432041_281kqbl646t21emi.eot?t=1506682542341'); /* IE9*/
    src: url('//at.alicdn.com/t/font_432041_281kqbl646t21emi.eot?t=1506682542341#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('//at.alicdn.com/t/font_432041_281kqbl646t21emi.ttf?t=1506682542341') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_432041_281kqbl646t21emi.svg?t=1506682542341#iconfont') format('svg'); /* iOS 4.1- */
  }
  .s-icon {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    speak: none;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;

    &-check:before {
      content: "\e645";
    }

    &-close:before {
      content: "\e646";
    }

    &-loading:before {
      content: "\e64f";
    }

    &-roundcheckfill:before {
      content: "\e656";
    }

    &-roundcheck:before {
      content: "\e657";
    }

    &-roundclosefill:before {
      content: "\e658";
    }

    &-roundclose:before {
      content: "\e659";
    }

    &-timefill:before {
      content: "\e65e";
    }

    &-time:before {
      content: "\e65f";
    }

    &-back:before {
      content: "\e679";
    }

    &-right:before {
      content: "\e6a3";
    }

    &-add:before {
      content: "\e6da";
    }

    &-fold:before {
      content: "\e6de";
    }

    &-infofill:before,
    &-warningfill:before {
      content: "\e6e4";
    }

    &-info:before,
    &-warning:before {
      content: "\e6e5";
    }

    &-radiobox:before {
      content: "\e75b";
    }

    &-radioboxfill:before {
      content: "\e763";
    }

    &-warningfill:before,
    &-warning:before {
      transform: rotate(180deg);
      display: block;
    }
  }

</style>
