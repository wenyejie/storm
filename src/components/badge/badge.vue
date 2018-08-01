<!--
 - badge
 -
 - @author: Storm
 - @date: 2018/08/01
 -->
<template>
  <div class="s-badge">
    <slot></slot>
    <sup class="s-badge-sup" :class="supClasses">{{innerText}}</sup>
  </div>
</template>

<script>
  const maxVal = (input, isDot,  max = 99) => {
    if (input === void 0 || isDot) return "";
    else if (typeof input === "string") return input;
    return input <= max ? input : `${max}+`;
  };

  export default {
    name: "sBadge",
    props: {
      value: [String, Number],
      type: {
        default: "danger",
        validator (val) {
          return ["primary", "info", "success", "danger", "warning"].includes(val);
        }
      },

      // 最大值
      max: {
        type: Number,
        default: 99
      },

      // 是否为一个点
      isDot: Boolean
    },
    computed: {
      supClasses () {
        return { "isDot": this.isDot, "isFixed": this.$slots.default };
      },

      innerText () {
        return maxVal(this.value, this.isDot, this.max);
      }
    }
  };
</script>

<style lang="scss">
  .s-badge {
    position: relative;
    vertical-align: middle;
    display: inline-block;

    &-sup {
      top: 0;
      background-color: #f56c6c;
      border-radius: 10px;
      color: #fff;
      display: block;
      font-size: 12px;
      height: 20px;
      line-height: 18px;
      padding: 0 6px;
      text-align: center;
      white-space: nowrap;
      border: 1px solid #fff;

      &.isFixed {
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
      }

      &.isDot {
        height: 8px;
        width: 8px;
        padding: 0;
        right: 5px;
        border-radius: 50%;
      }
    }
  }
</style>