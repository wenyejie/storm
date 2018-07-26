<!--
 - checkbox
 -
 - author: Storm
 - date: 2017/10/07
 -->

<template>
  <label class="s-radio" :class="classes">
    <input type="radio"
           class="s-radio-input"
           :name="name"
           @change="handleChange($event)"
           @click="handleClick($event)"
           :checked="checked"
           :true-value="trueValue"
           :false-value="falseValue"
           :disabled="disabled">
    <span class="s-radio-indi"></span>
    <span class="s-radio-desc"><slot></slot></span>
  </label>
</template>

<script>
  export default {
    name: "sRadio",
    props: {
      disabled: Boolean,
      name: String,
      value: {},
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
      block: Boolean,
      size: {
        type: [String, Number],
        validator (val) {
          return ["lg", "sm", "xs"].includes(val);
        }
      }
    },
    computed: {

      /**
       * className
       */
      classes () {
        return [
          {
            [`s-radio-block`]: !!this.block
          }
        ];
      },

      // 判断是否为group
      isGroup () {
        return this.$parent.$options.name === "sRadioGroup";
      }
    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.setChecked();
        }
      },
      "$parent.value" (val, oldVal) {
        if (val !== oldVal) {
          this.setChecked();
        }
      }
    },
    data () {
      return {
        checked: null
      };
    },
    methods: {

      /**
       * 选中checkbox
       * @param $event 选中值
       */
      handleChange ($event) {
        this.checked = $event.target.checked;
        if (this.isGroup) {
          this.$parent.update(this.value);
        }
        this.$emit("input", this.checked ? this.trueValue : this.falseValue);
        this.$emit("change", $event);
      },

      /**
       * 点击radio
       * @param $event 事件
       */
      handleClick ($event) {
        this.$emit("click", $event);
      },

      /**
       * 设置是否选中
       */
      setChecked () {
        if (this.isGroup) {
          this.checked = this.$parent.value === this.value;
        } else {
          this.checked = this.value === this.trueValue;
        }
      }
    },
    created () {
      this.setChecked();
    },
    beforeDestroy () {

      // 如果是group并且被选中, 通知父组件取消该值
      if (this.isGroup && this.checked) {
        this.$parent.update(this.value);
      }
    }
  };
</script>

<style lang="scss">
  @import "../../styles/variable.scss";
  .s-radio {
    position: relative;
    display: inline-block;

    & + & {
      margin-left: 12px;
    }

    & + &-block {
      margin-left: 0;
    }

    &-input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &-indi,
    &-desc {
      display: inline-block;
      vertical-align: middle;
    }

    &-indi {
      pointer-events: none;
      user-select: none;
      width: 1em;
      height: 1em;
      border: 1px solid $lightGrey;
      border-radius: 50%;
      transition: all .3s ease;
    }

    &-input:checked + &-indi {
      border-color: #20a0ff;
      background-color: #20a0ff;
      position: relative;

      &:before {
        width: .3em;
        height: .3em;
        border-radius: 50%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &-desc {

    }

    &-block {
      display: block;
    }
  }
</style>
