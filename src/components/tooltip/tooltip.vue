<!--
 - tooltip
 -
 - @author: Storm
 - @date: 2018/04/29
 -->
<template>
  <div class="s-tooltip"
       @focus="show('focus')"
       @blur="show('focus')"
       @click="toggle('click')"
       @mouseenter="show('hover')"
       @mouseleave="hide('hover')">
    <slot></slot>
    <transition name="s-tooltip-inner">
      <div v-if="visible !== 0"
           v-show="visible === 1"
           :class="classes"
           class="s-tooltip-inner">
        <slot name="inner">{{content}}</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'sTooltip',
    props: {
      content: String,
      eventType: {
        type: String,
        default: 'hover',
        validator (val) {
          return ['hover', 'click', 'focus'].includes(val);
        }
      },

      position: {
        type: String,
        default: 'top',
        validator (val) {
          return ['top', 'top-left', 'top-right', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-right', 'bottom-left', 'left', 'left-bottom', 'left-top'].includes(val);
        }
      }
    },
    data () {
      return {
        visible: 1
      };
    },
    computed: {
      classes () {
        return [
          `s-tooltip-${this.position}`
        ];
      }
    },
    methods: {
      show (type) {
        if (type !== this.eventType) return;

        this.visible = 1;
      },
      hide (type) {
        if (type !== this.eventType) return;
        this.visible = 2;
      },
      toggle () {
        if (type !== this.eventType) return;
        if (this.visible !== 1) this.show();
        else this.hide();
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-tooltip {
    position: relative;
    display: inline-block;

    &-inner {
      position: absolute;
      transition: all .3s ease-in-out;
      background-color: #333;
      color: #fff;
      border-radius: 4px;
      padding: 10px;
      font-size: 12px;
      min-width: 10px;
      will-change: transform;
      @include text-wrap;
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, .5));

      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
      }

      &-enter,
      &-leave-active {
        opacity: 0;
      }

    }

    &-top,
    &-top-left,
    &-top-right {
      &:after {
        bottom: -6px;
        margin-left: -6px;
        border-bottom-width: 0;
        border-top-color: #333;
      }
    }

    &-top {
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-100% - 8px));

      &:after {
        left: 50%;
      }
    }

    &-top-left {
      top: 0;
      left: 0;
      transform: translate(0, calc(-100% - 8px));

      &:after {
        left: 15px;
      }
    }

    &-top-right {
      top: 0;
      right: 0;
      transform: translate(0, calc(-100% - 8px));

      &:after {
        right: 15px;
      }
    }

    &-right,
    &-right-top,
    &-right-bottom {
      &:after {
        left: -6px;
        margin-top: -6px;
        border-left-width: 0;
        border-right-color: #333;
      }
    }

    &-right {
      right: 0;
      top: 50%;
      transform: translate(calc(100% + 8px), -50%);

      &:after {
        top: 50%;
      }
    }

    &-right-top {
      right: 0;
      top: 0;
      transform: translate(calc(100% + 8px), 0);

      &:after {
        top: 15px;
      }
    }

    &-right-bottom {
      right: 0;
      bottom: 0;
      transform: translate(calc(100% + 8px), 0);

      &:after {
        bottom: 15px;
      }
    }

    &-bottom,
    &-bottom-left,
    &-bottom-right {
      &:after {
        top: -6px;
        margin-left: -6px;
        border-top-width: 0;
        border-bottom-color: #333;
      }
    }

    &-bottom {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% + 8px));

      &:after {
        left: 50%;
      }
    }

    &-bottom-left {
      bottom: 0;
      left: 0;
      transform: translate(0, calc(100% + 8px));

      &:after {
        left: 15px;
      }
    }

    &-bottom-right {
      bottom: 0;
      right: 0;
      transform: translate(0, calc(100% + 8px));

      &:after {
        right: 15px;
      }
    }

    &-left,
    &-left-top,
    &-left-bottom {
      &:after {
        right: -6px;
        margin-top: -6px;
        border-right-width: 0;
        border-left-color: #333;
      }
    }

    &-left {
      left: 0;
      top: 50%;
      transform: translate(calc(-100% - 8px), -50%);

      &:after {
        top: 50%;
      }
    }

    &-left-top {
      left: 0;
      top: 0;
      transform: translate(calc(-100% - 8px), 0);

      &:after {
        top: 15px;
      }
    }

    &-left-bottom {
      left: 0;
      bottom: 0;
      transform: translate(calc(-100% - 8px), 0);

      &:after {
        bottom: 15px;
      }
    }
  }
</style>