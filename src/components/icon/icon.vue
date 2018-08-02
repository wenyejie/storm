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
        const result = {};

        // 判断是否为number类型
        if (typeof this.size === 'number') { // 是
          result.fontSize = `${this.size}px`;
        } else if (typeof this.size === 'string' && /\d/.test(this.size)) {
          result.fontSize = this.size;
        }

        // 判断是否有颜色
        if (this.color) {
          result.color = this.color;
        }
        return result;
      }
    }
  };
</script>

<style lang="scss">

  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_432041_b1gv2rvf2rg.eot?t=1533196916649'), /* IE9*/
    url('//at.alicdn.com/t/font_432041_b1gv2rvf2rg.ttf?t=1533196916649') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
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

    &-favorfill:before {
      content: "\e64b";
    }

    &-favor:before {
      content: "\e64c";
    }

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
