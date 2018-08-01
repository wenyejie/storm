<!--
 - 进度条组件
 -
 - @author: Storm
 - @date: 2018/08/01
 -->
<template>
  <div class="s-progress">
    <div v-if="type === 'rectangle'" class="s-progress-rectangle">
      <div class="s-progress-rectangle-bar" :style="{width: value + '%'}">{{value}}%</div>
    </div>
    <div v-else-if="type === 'circle'" class="s-progress-circle">
      <svg viewBox="0 0 100 100">
        <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
              stroke="#e5e9f2"
              stroke-width="4.8"
              fill="none"></path>
        <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
              stroke-linecap="round"
              :stroke="barColor"
              :stroke-width="strokeWidth"
              fill="none"
              class="s-progress-circle-bar"
              ref="circleBar"
              :style="circleBarStyles"
              style="transition: stroke-dashoffset 0.6s ease, stroke 0.6s ease;"></path>
      </svg>
      <div class="s-progress-circle-text">{{value}}%</div>
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

      barColor: {
        type: String,
        default: '#20a0ff'
      },

      strokeWidth: {
        type: Number,
        default: 4.8
      },

      // 类型
      type: {
        type: String,
        default: "rectangle",
        validator (val) {
          return ["circle", "rectangle"].includes(val);
        }
      }
    },
    data () {
      return {};
    },
    computed: {
      circleBarStyles () {
        return {
          'stroke-dasharray': `${this.circleGirth * this.value / 100}px ${this.circleGirth}px`
        }
      }
    },
    methods: {
      circleInit () {
        this.circleGirth = (this.$el.clientHeight - this.strokeWidth) * Math.PI;
      },
    },
    mounted () {
      if (this.type === 'circle') this.circleInit();
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-progress {

    &-rectangle {
      text-align: center;
      height: 14px;
      background-color: $primary;
      font-size: 12px;
      line-height: 14px;
      border-radius: 6px;
      overflow: hidden;

      &-bar {
        background-color: $primary;
        color: $white;
        min-width: 22px;
        transition: width .6s ease;
      }
    }

    &-circle {
      width: 100px;
      height: 100px;
      position: relative;

      &-text {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
        text-align: center;
      }
    }

  }
</style>