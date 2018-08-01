<!--
 - 进度条组件
 -
 - @author: Storm
 - @date: 2018/08/01
 -->
<template>
  <div class="s-progress">
    <div class="s-progress-rectangle">
      <div class="s-progress-bar" :style="{width: value + '%'}">{{value}}%</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sProgress",
    props: {
      value: {
        type: Number,
        default: 0
      },
      size: {
        type: String
      },

      // 类型
      type: {
        type: String,
        default: 'rectangle',
        validator (val) {
          return ['circle', 'rectangle'].includes(val)
        }
      }
    },
    watch: {

    },
    data () {
      return {
      }
    },
    methods: {

    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-progress {

    &-rectangle {
      text-align: center;
      height: 14px;
      background-color: #ebeef5;
      font-size: 12px;
      line-height: 14px;
      border-radius: 6px;
      overflow: hidden;
    }

    &-bar {
      background-color: $primary;
      color: $white;
      min-width: 22px;
      transition: width .3s ease;
    }

  }
</style>